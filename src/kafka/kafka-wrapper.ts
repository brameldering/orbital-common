import { Kafka, Admin, logLevel } from 'kafkajs';

class KafkaWrapper {
  private _client?: Kafka;
  private _clientId?: string;
  private _admin?: Admin;

  get client() {
    if (!this._client) {
      throw new Error(
        'Kafka client has not yet been connected, use the connect method first before get client'
      );
    }
    return this._client;
  }

  connect(clientId: string, brokers: string[]) {
    this._client = new Kafka({ clientId, brokers, logLevel: logLevel.ERROR });
    this._clientId = clientId;
    console.log('Created client for Kafka brokers', brokers);
  }

  async ensureTopicExists(topicToCheck: string) {
    if (!this._client) {
      throw new Error('KafkaWrapper: Cannot access admin before connecting');
    }
    try {
      // initialize admin client
      this._admin = this._client.admin();
      await this._admin.connect();
      console.log('Connected to kafka admin');
      // check if topic is in list of existing topics
      const existingTopics = await this._admin.listTopics();
      if (!existingTopics.includes(topicToCheck)) {
        // Create topic
        await this._admin.createTopics({
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
    } finally {
      await this._admin?.disconnect();
    }
  }
}

export const kafkaWrapper = new KafkaWrapper();
