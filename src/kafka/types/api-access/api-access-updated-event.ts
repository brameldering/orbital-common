import { Topics } from '../topics';

export interface ApiAccessUpdatedEvent {
  topic: Topics.ApiAccessUpdated;
  key: string; // key should be the same as the id
  data: {
    id: string;
    microservice: string;
    apiName: string;
    allowedRoles: string[];
  };
}
