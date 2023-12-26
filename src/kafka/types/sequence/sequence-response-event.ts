import { Topics } from '../topics';
import { Entities } from './entity-types';

export interface SequenceResponseEvent {
  topic: Topics.SequenceResponse;
  key: String;
  data: {
    entity: Entities;
    entityObjectId: string;
    sequenceNumber: number;
  };
}
