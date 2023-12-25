import { Topics } from '../topics';

export interface SequenceResponseEvent {
  topic: Topics.SequenceResponse;
  data: {
    entity: string;
    entityObjectId: string;
    sequenceNumber: number;
  };
}
