import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { Topics } from './types/topics';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract topic: T['topic'];
  abstract onMessage(data: T['data']): void;
  protected client: Kafka;
  private _consumer: Consumer;

  constructor(
    // clientId: string,
    // brokers: string[],
    client: Kafka,
    protected consumerGroupID: string
  ) {
    // this.client = new Kafka({ clientId, brokers, logLevel: logLevel.ERROR });
    this.client = client;
    this._consumer = this.client.consumer({ groupId: this.consumerGroupID });
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
    await this._consumer.connect();
    await this._consumer.subscribe({ topic: this.topic, fromBeginning: true });

    await this._consumer.run({
      eachMessage: async ({
        topic,
        partition,
        message,
      }: EachMessagePayload) => {
        const parsedData = this.parseMessage(message);
        console.log(
          `Received message for consumerGroupID: ${this.consumerGroupID}, topic: ${topic}, partition: ${partition}, offset: ${message.offset} - data:`,
          parsedData
        );
        this.onMessage(parsedData);
      },
    });

    this._consumer.on('consumer.crash', ({ payload }) => {
      console.error(
        `Error in consumer group: ${this.consumerGroupID}, topic: ${this.topic}:`,
        payload.error
      );
    });
  }

  parseMessage(message: { value: Buffer | null }) {
    const data = message.value;
    return data ? JSON.parse(data.toString()) : null;
  }
}
