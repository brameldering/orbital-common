export interface IApi {
  apiName: string;
  apiUrl: string;
  method: string;
  hasParams: boolean;
}

export interface IApiAccess {
  id?: string;
  apiName: string;
  microservice: string;
  allowedRoles: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IApiAccessCreate {
  apiName: string;
  microservice: string;
  allowedRoles: string[];
}

export interface IApiAccessRole {
  api_access_name: string;
  role_id: string;
}
