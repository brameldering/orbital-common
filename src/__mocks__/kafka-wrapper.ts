import { MockPublisher } from './base-publisher';
import { Topics } from '../kafka/types/topics';

// __mocks__/@orbitelco/common.js
class KafkaWrapper {
  _client: any;
  _admin: any;
  _publishers: { [topic: string]: MockPublisher<any> } = {};
  _createdTopics = new Set(); // Keep track of "created" topics
  _clientId: any;

  get client() {
    if (!this._client) {
      throw new Error('Mock: Cannot get client, connect first');
    }
    return this._client;
  }

  get admin() {
    if (!this._admin) {
      throw new Error('Mock: Cannot get admin, connect first');
    }
    return this._admin;
  }

  get publishers() {
    for (const topic of Object.values(Topics)) {
      this._publishers[topic] = new MockPublisher('topic');
    }
    return this._publishers;
  }

  async connect(clientId: any, brokers: any) {
    // Create a mock Kafka client
    this._client = {
      admin: () => {
        return {
          connect: jest.fn().mockResolvedValue(undefined),
          disconnect: jest.fn().mockResolvedValue(undefined),
          listTopics: jest.fn().mockResolvedValue([...this._createdTopics]),
          createTopics: jest.fn().mockImplementation(({ topics }) => {
            topics.forEach((topic: any) =>
              this._createdTopics.add(topic.topic)
            );
            return Promise.resolve();
          }),
        };
      },
    };

    this._admin = this._client.admin();
    await this._admin.connect();
    this._clientId = clientId;
    console.log('Mock: Created client for Kafka brokers', brokers);
  }

  async disconnect() {
    this._client = undefined;
    this._admin = undefined;
    console.log('Mock: Kafka client and admin disconnected');
  }

  async ensureTopicExists(
    topicToCheck: any,
    numPartitions: any,
    replicationFactor: any
  ) {
    if (!this._client) {
      throw new Error('Mock: Cannot use ensureTopicExists before connect');
    }
    const existingTopics = await this.admin.listTopics();
    if (!existingTopics.includes(topicToCheck)) {
      await this.admin.createTopics({
        topics: [{ topic: topicToCheck, numPartitions, replicationFactor }],
        timeout: 10000,
        waitForLeaders: true,
      });
      console.log(`Mock: Created topic: ${topicToCheck}`);
    } else {
      console.log(`Mock: Topic ${topicToCheck} already exists`);
    }
  }
}

export const kafkaWrapper = new KafkaWrapper();
