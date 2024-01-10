import { Topics } from '../topics';

export interface ApiAccessCreatedEvent {
  topic: Topics.ApiAccessCreated;
  key: string;
  data: {
    id: string;
    apiName: string;
    microservice: string;
    allowedRoles: string[];
  };
}
