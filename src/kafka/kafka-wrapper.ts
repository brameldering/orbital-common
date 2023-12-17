import { Kafka, Admin, logLevel } from 'kafkajs';

class KafkaWrapper {
  private _client?: Kafka;
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
    console.log('Created client for Kafka brokers', brokers);
  }

  async ensureTopicExists(topicToCheck: string) {
    if (!this._client) {
      throw new Error('Cannot access Kafka admin client before connecting');
    }
    try {
      // initialize admin client
      this._admin = this._client.admin();
      await this._admin.connect();
      console.log('Created and connected kafka admin');
      // check if topic is in list of existing topics
      const existingTopics = await this._admin.listTopics();
      if (!existingTopics.includes(topicToCheck))
        // Create topic
        await this._admin.createTopics({
          topics: [{ topic: topicToCheck }],
          waitForLeaders: true, // Wait for topic leaders to be elected
        });
      console.log(`Created topic: ${topicToCheck}`);
    } catch (error) {
      console.error('Failed to ensure Kafka topic exists:', error);
      throw error;
    } finally {
      await this._admin?.disconnect();
    }
  }
}

export const kafkaWrapper = new KafkaWrapper();
