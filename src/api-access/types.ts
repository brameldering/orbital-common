export interface IApi {
  microservice: string;
  apiUrl: string;
  method: string;
  hasParams: boolean;
}

export interface IApiAccess {
  apiUrl: string;
  method: string;
  hasParams: boolean;
  allowedRoles: string[];
}
