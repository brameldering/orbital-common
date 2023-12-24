jest.mock('kafkajs', () => {
  const MockAdmin = jest.fn().mockImplementation(() => ({
    connect: jest.fn(),
    disconnect: jest.fn(),
    listTopics: jest.fn(),
    createTopics: jest.fn(),
  }));

  // Mock Kafka class
  const MockKafka = jest.fn().mockImplementation(() => ({
    admin: jest.fn().mockImplementation(() => new MockAdmin()),
  }));

  // Mock logLevel enum
  const logLevel = {
    NOTHING: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 4,
    DEBUG: 5,
  };

  return {
    Kafka: MockKafka,
    logLevel,
  };
});

export default {};
