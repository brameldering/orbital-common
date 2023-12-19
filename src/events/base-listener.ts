import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { Topics } from './types/topics';
import { IConsumerConfig } from './types/consumer-config';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract topic: T['topic'];
  abstract onMessage(data: T['data']): void;
  private _consumer: Consumer;

  constructor(
    protected client: Kafka,
    protected consumerGroupID: string,
    protected consumerConfig: IConsumerConfig
  ) {
    // this.client = new Kafka({ clientId, brokers, logLevel: logLevel.ERROR });
    // this.client = client;
    this._consumer = this.client.consumer({
      groupId: this.consumerGroupID,
      ...consumerConfig,
    });
  }

  async shutdown() {
    console.log(
      `Shutting down consumer for topic ${this.topic} and CG ${this.consumerGroupID}`
    );
    try {
      await this._consumer.disconnect();
      console.log(
        `Disconnected consumer for topic ${this.topic} and CG ${this.consumerGroupID}`
      );
    } catch (error) {
      console.error(
        `Error disconnecting consumer for topic ${this.topic} and CG ${this.consumerGroupID}`,
        error
      );
    }
  }

  // consumerOptions() {
  //   return {
  //     kafkaHost: process.env.ZOOKEEPER_URL!,
  //     groupId: this.consumerGroupID,
  //     autoCommit: true, // Enable auto-commit
  //     autoCommitIntervalMs: 5000, // Auto-commit interval (in ms)
  //     sessionTimeout: 10000, // Session timeout (in ms)
  //     fetchMaxBytes: 1024 * 1024, // Max fetch bytes
  //   };
  // }
  async listen() {
    try {
      await this._consumer.connect();
      console.log(
        `Connected consumer for topic ${this.topic} and CG ${this.consumerGroupID}`
      );
      await this._consumer.subscribe({
        topic: this.topic,
        fromBeginning: true,
      });
      console.log(
        `Subscribed consumer to topic ${this.topic} and CG ${this.consumerGroupID}`
      );
    } catch (error) {
      console.error(
        `Error subscribing consumer for topic ${this.topic} and CG ${this.consumerGroupID}`,
        error
      );
    }

    await this._consumer.run({
      eachMessage: async ({
        topic,
        partition,
        message,
      }: EachMessagePayload) => {
        const parsedData = this.parseMessage(message);
        console.log(
          `Received message for CG: ${this.consumerGroupID}, topic: ${topic}, partition: ${partition}, offset: ${message.offset} - data:`,
          parsedData
        );
        this.onMessage(parsedData);
      },
    });

    this._consumer.on('consumer.crash', ({ payload }) => {
      console.error(
        `Error in CG: ${this.consumerGroupID}, topic: ${this.topic}:`,
        payload.error
      );
    });
  }

  parseMessage(message: { value: Buffer | null }) {
    const data = message.value;
    return data ? JSON.parse(data.toString()) : null;
  }
}
