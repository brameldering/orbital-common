import { Topics } from '../topics';
import { Entities } from './entity-types';

export interface SequenceRequestEvent {
  topic: Topics.SequenceRequest;
  key: string; // key is the same as entity and should be one of the enum values
  data: {
    entity: Entities;
    entityObjectId: string;
  };
}
