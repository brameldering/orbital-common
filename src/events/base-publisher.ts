import { Kafka, Producer, logLevel } from 'kafkajs';
import { Topics } from './types/topics';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract topic: T['topic'];
  protected client: Kafka;
  private _producer: Producer;

  constructor(clientId: string, brokers: string[]) {
    this.client = new Kafka({ clientId, brokers, logLevel: logLevel.ERROR });
    this._producer = this.client.producer({
      allowAutoTopicCreation: true,
      transactionTimeout: 30000,
    });

    process.on('SIGINT', async () => {
      console.log('Disconnecting producer...');
      await this._producer.disconnect();
      console.log('Producer disconnected');
      process.exit(0);
    });
  }

  async publish(data: T['data']): Promise<void> {
    const key = data.id;
    try {
      await this._producer.connect();
    } catch (error) {
      console.error('Error in connecting producer:', error);
      throw error; // Rethrow the error after logging
    }
    try {
      await this._producer.send({
        topic: this.topic,
        acks: 1,
        messages: [{ key, value: JSON.stringify(data) }],
      });
      console.log(
        `Published message on topic: ${this.topic} with key ${key}`,
        data
      );
    } catch (error) {
      console.error('Error in publishing message:', error);
      throw error; // Rethrow the error after logging
    }
  }
}
