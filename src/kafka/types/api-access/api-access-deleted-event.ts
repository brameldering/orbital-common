import { Topics } from '../topics';

export interface ApiAccessDeletedEvent {
  topic: Topics.ApiAccessDeleted;
  key: string; // key should be the same as the id
  data: {
    id: string;
    microservice: string;
    apiName: string;
  };
}
