import { Topics } from '../topics';

export interface ApiAccessUpdatedEvent {
  topic: Topics.ApiAccessUpdated;
  key: string;
  data: {
    id: string;
    apiName: string;
    microservice: string;
    allowedRoles: string[];
  };
}
