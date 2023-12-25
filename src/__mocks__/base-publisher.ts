export class MockPublisher {
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

  async publish(data: any): Promise<void> {
    console.log(`Mock Published message on topic: ${this._topic}`, data);
  }
}
