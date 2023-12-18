import { Kafka, Admin, logLevel } from 'kafkajs';

class KafkaWrapper {
  private _client?: Kafka;
  private _clientId?: string;
  private _admin?: Admin;

  get client() {
    if (!this._client) {
      throw new Error(
        'Cannot get client, use the kafkaWrapper.connect() method first before get client'
      );
    }
    return this._client;
  }

  get admin() {
    if (!this._admin) {
      throw new Error(
        'Cannot get admin, use the kafkaWrapper.connect() method first before get admin'
      );
    }
    return this._admin;
  }

  async connect(clientId: string, brokers: string[]) {
    // Initialize kafka client
    this._client = new Kafka({ clientId, brokers, logLevel: logLevel.ERROR });
    this._clientId = clientId;
    console.log('Created client for Kafka brokers', brokers);

    // initialize kafka admin
    this._admin = this._client.admin();
    await this._admin.connect();
    console.log('Connected to kafka admin');
  }

  async disconnect() {
    try {
      if (this._admin) {
        console.log('Disconnecting Kafka admin client');
        await this._admin.disconnect();
        this._admin = undefined;
      }

      if (this._client) {
        console.log('Invalidating Kafka client');
        // await this._client.disconnect();
        this._client = undefined;
      }

      console.log('Kafka client and admin disconnected successfully');
    } catch (error) {
      console.error('Error while disconnecting Kafka client and admin:', error);
      throw error;
    }
  }

  async ensureTopicExists(topicToCheck: string) {
    if (!this._client) {
      throw new Error(
        'KafkaWrapper: Cannot use ensureTopicExists before using kafkaWrapper.connect(...)'
      );
    }
    try {
      // check if topic is in list of existing topics
      const existingTopics = await this.admin.listTopics();
      if (!existingTopics.includes(topicToCheck)) {
        // Create topic
        await this.admin.createTopics({
          topics: [{ topic: topicToCheck }],
          waitForLeaders: true, // Wait for topic leaders to be elected
        });
        console.log(
          `Kafka client ${this._clientId} created topic: ${topicToCheck}`
        );
      } else {
        console.log(
          `Kafka client ${this._clientId} found topic: ${topicToCheck} already exists`
        );
      }
    } catch (error) {
      console.error(
        `Kafka client ${this._clientId} failed to ensure topic: ${topicToCheck}:`,
        error
      );
      throw error;
    }
  }
}

export const kafkaWrapper = new KafkaWrapper();
