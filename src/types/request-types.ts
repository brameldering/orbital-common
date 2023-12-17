import { Request } from 'express';
import { IUserAttrs } from './mongoose-model-types/mongoose-user-types';
import { IApiAccessAttrs } from './mongoose-model-types/mongoose-access-types';

export interface IExtendedRequest extends Request {
  currentUser?: IUserAttrs;
  apiAccessCache?: IApiAccessAttrs[];
}

export interface IDecodedJWTVerify {
  userId: string;
  email: string;
  iat: string;
  exp: string;
}
