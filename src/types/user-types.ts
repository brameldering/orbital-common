export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface IUserInfo {
  userInfo: IUser | null;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IChangeUserProfile {
  name: string;
  email: string;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}

export interface IResetPassword {
  email: string;
}
