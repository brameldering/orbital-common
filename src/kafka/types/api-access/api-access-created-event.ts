import { Topics } from '../topics';

export interface ApiAccessCreatedEvent {
  topic: Topics.ApiAccessCreated;
  key: string;
  data: {
    id: string;
    microservice: string;
    apiName: string;
    allowedRoles: string[];
  };
}
