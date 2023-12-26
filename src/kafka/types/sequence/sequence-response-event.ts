import { Topics } from '../topics';
import { Entities } from './entity-types';

export interface SequenceResponseEvent {
  topic: Topics.SequenceResponse;
  key: Entities; // key is the same as entity and should be one of the enum values
  data: {
    entity: Entities;
    entityObjectId: string;
    sequenceNumber: number;
  };
}
