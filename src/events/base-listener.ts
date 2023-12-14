import kafka, { KafkaClient, Message } from 'kafka-node';
import { Topics } from './types/topics';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract topic: T['topic'];
  abstract consumerGroupID: string;
  abstract onMessage(data: T['data'], msg: Message): void;
  protected client: KafkaClient;
  // protected ackWait = 5 * 1000;

  constructor(client: KafkaClient) {
    this.client = client;
  }

  consumerOptions() {
    return {
      groupId: this.consumerGroupID,
      autoCommit: true, // Enable auto-commit
      autoCommitIntervalMs: 5000, // Auto-commit interval (in ms)
      sessionTimeout: 15000, // Session timeout (in ms)
      fetchMaxBytes: 1024 * 1024, // Max fetch bytes
    };
  }

  listen() {
    const consumerGroup = new kafka.ConsumerGroup(
      Object.assign({ id: this.consumerGroupID }, this.consumerOptions()),
      this.topic
    );

    consumerGroup.on('message', (msg) => {
      const parsedData = this.parseMessage(msg);

      console.log(
        `= Received for consumerGroupID${this.consumerGroupID}, topic: ${msg.topic}, partition: ${msg.partition}, offset: ${msg.offset} - data:`,
        parsedData
      );

      this.onMessage(parsedData, msg);
    });

    consumerGroup.on('error', (error) => {
      console.error(
        `= Error = Consumergroupid: ${this.consumerGroupID}, topic: ${this.topic} error:`,
        error
      );
    });
  }

  parseMessage(msg: Message) {
    // const data = msg.value();
    const data = msg.value;
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString());
  }
}
