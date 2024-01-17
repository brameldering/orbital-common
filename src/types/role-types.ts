export interface IRole {
  id: string;
  role: string;
  roleDisplay: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface IRoleCreate {
  role: string;
  roleDisplay: string;
}
