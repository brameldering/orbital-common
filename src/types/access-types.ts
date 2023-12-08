export interface IApiAccess {
  id: string;
  microservice: string;
  apiName: string;
  allowedRoles: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IApiAccessCreate {
  microservice: string;
  apiName: string;
  allowedRoles: string[];
}
