import { Topics } from '../kafka/types/topics';
import { ApplicationIntegrityError } from '../types/error-types';

interface Event {
  topic: Topics;
  key: string;
  data: any;
}

export class MockPublisher<T extends Event> {
  private _topic: string;

  constructor(topic: string) {
    this._topic = topic;
  }

  // async connect() {
  //   console.log(`Mock Producer connected for topic ${this._topic}`);
  // }

  // async shutdown() {
  //   console.log(`Mock Producer disconnected for topic: ${this._topic}`);
  // }

  async publish(key: string, data: T['data']): Promise<void> {
    if (!key) {
      throw new ApplicationIntegrityError(
        `Error publishing message on topic ${this._topic}: property key is empty`
      );
    }
    console.log(`Mock Published message on topic: ${this._topic}:`, data);
  }
}
