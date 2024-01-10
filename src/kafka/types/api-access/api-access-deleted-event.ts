import { Topics } from '../topics';

export interface ApiAccessDeletedEvent {
  topic: Topics.ApiAccessDeleted;
  key: string;
  data: {
    id: string;
    apiName: string;
    microservice: string;
  };
}
