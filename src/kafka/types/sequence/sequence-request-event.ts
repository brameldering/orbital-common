import { Topics } from '../topics';

export interface SequenceRequestEvent {
  topic: Topics.SequenceRequest;
  data: {
    entity: string;
    entityObjectId: string;
  };
}
