export interface IUser {
  id: string;
  role: string;
  roleDisplay: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IRoleCreate {
  role: string;
  roleDisplay: string;
}
