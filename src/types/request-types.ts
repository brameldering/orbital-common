import { Request } from 'express';
import { IUserObj } from './user-types';

export interface IExtendedRequest extends Request {
  currentUser?: IUserObj;
}

export interface IDecodedJWTVerify {
  userId: string;
  email: string;
  iat: string;
  exp: string;
}
