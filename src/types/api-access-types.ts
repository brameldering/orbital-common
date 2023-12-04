export interface IApi {
  apiName: string;
  apiUrl: string;
  method: string;
  hasParams: boolean;
}

export interface IApiAccess {
  microservice: string;
  apiName: string;
  allowedRoles: string[];
}
