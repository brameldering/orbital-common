export interface IApiAccess {
  api: string;
  method: string;
  hasParams: boolean;
  allowedRoles: string[];
}
