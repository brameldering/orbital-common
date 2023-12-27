import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { Listener } from './base-listener';
import { IConsumerConfig } from './types/consumer-config';
import { ApplicationIntegrityError } from '../types/error-types';

export class ListenerManager {
  private consumer: Consumer;
  private listeners: Map<string, Listener<any>> = new Map();

  constructor(
    protected client: Kafka,
    protected consumerGroupID: string,
    protected consumerConfig: IConsumerConfig
  ) {
    console.log(`Creating consumer for CG ${consumerGroupID}...`);
    this.consumer = client.consumer({
      groupId: consumerGroupID,
      ...consumerConfig,
    });
    console.log(`Created consumer for CG ${consumerGroupID}`);
  }

  async connect() {
    console.log(`Connecting consumer for CG ${this.consumerGroupID}...`);
    try {
      await this.consumer.connect();
      console.log(`Connected consumer for CG ${this.consumerGroupID}`);
    } catch (error: any) {
      console.error(
        `Error connecting consumer for CG ${this.consumerGroupID}`,
        error
      );
      throw new Error(
        `Error connecting consumer for CG ${this.consumerGroupID}`
      );
    }
  }

  async disconnect() {
    console.log(`Disconnecting consumer for CG ${this.consumerGroupID}...`);
    try {
      await this.consumer.disconnect();
      console.log(`Disconnected consumer for CG ${this.consumerGroupID}`);
    } catch (error: any) {
      console.error(
        `Error disconnecting consumer for CG ${this.consumerGroupID}`,
        error
      );
      throw new Error(
        `Error disconnecting consumer for CG ${this.consumerGroupID}`
      );
    }
  }

  async registerListener(listener: Listener<any>) {
    console.log(
      `Registering consumer to CG ${this.consumerGroupID} for topic ${listener.topic}`
    );
    try {
      this.listeners.set(listener.topic, listener);
      // Subscribe the consumer to the topic
      await this.consumer.subscribe({
        topic: listener.topic,
        fromBeginning: true,
      });
      console.log(
        `Subscribed consumer to CG ${this.consumerGroupID} for topic ${listener.topic}`
      );
    } catch (error: any) {
      console.error(
        `Error subscribing consumer to CG ${this.consumerGroupID} for topic ${listener.topic}`,
        error
      );
      throw new Error(
        `Error subscribing consumer to CG ${this.consumerGroupID} for topic ${listener.topic}`
      );
    }
  }

  async listen() {
    await this.consumer.run({
      eachMessage: async ({
        topic,
        partition,
        message,
      }: EachMessagePayload) => {
        const listener = this.listeners.get(topic);
        if (listener) {
          // Extracting the key from the message
          const keyBuffer = message.key;
          let keyString = '';
          // Convert the key from Buffer to string, if the key exists
          if (keyBuffer) {
            keyString = keyBuffer.toString();
          } else {
            throw new ApplicationIntegrityError(
              `Error in listenerManager.listen: message.key has not been given for topic ${topic}`
            );
          }
          const parsedData = listener.parseMessage(message);
          console.log(
            `Received message for CG: ${this.consumerGroupID}, topic: ${topic}, partition: ${partition}, offset: ${message.offset}, key: ${keyString} - data:`,
            parsedData
          );
          await listener.onMessage(keyString, parsedData);
        } else {
          throw new ApplicationIntegrityError(
            `Error in listenerManager.listen: listener is not defined for topic ${topic}`
          );
        }
      },
    });

    this.consumer.on('consumer.crash', ({ payload }) => {
      console.error(
        `=> consumer.crash in CG: ${this.consumerGroupID}:`,
        payload.error
      );
      throw new Error(`Error in consumer for CG ${this.consumerGroupID}`);
    });
  }
}
