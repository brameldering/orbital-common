import { Topics } from '../topics';

export interface ApiAccessCreatedEvent {
  topic: Topics.ApiAccessCreated;
  key: string; // key should be the same as the id
  data: {
    id: string;
    microservice: string;
    apiName: string;
    allowedRoles: string[];
  };
}
