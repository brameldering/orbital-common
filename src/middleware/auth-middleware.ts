import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IExtendedRequest } from '../types/request-types';
import { IUserObj } from '../types/user-types';
import {
  NotAuthorizedError,
  ApplicationIntegrityError,
} from '../types/error-types';
import { IApiAccess } from '../api-access/interfaces';
import { API_ACCESS_AUTH } from '../api-access/api-access-auth';
import { API_ACCESS_PRODUCT } from '../api-access/api-access-product';
import { API_ACCESS_SEQ } from '../api-access/api-access-seq-service';

export const currentUser = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    // console.log('currentUser req.session.jwt does not exist');
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_SECRET!
    ) as IUserObj;
    // console.log('currentUser.payload', payload);
    req.currentUser = payload;
  } catch (err) {
    console.log('currentUser error:', err);
  }
  next();
};

// Find the first match for allowed role for api, method and whether it has trailing param
const getAllowedRoleForApi = (
  apiArray: IApiAccess[],
  apiUrl: string,
  apiMethod: string
): string => {
  // Check for first match, in other words the order in apiArray matters!
  const matchingRecord = apiArray.find((access) => {
    // Check if an API object in apiArray matches the apiUrl and apiMethod
    if (
      apiMethod === access.method &&
      ((apiUrl === access.api && !access.hasParams) ||
        (apiUrl.startsWith(access.api + '/') && access.hasParams))
    ) {
      return true;
    }
    return false;
  });
  // Check if no match is found
  if (!matchingRecord) {
    console.log('getAllowedRoleForApi - No role found for the given API');
    throw new ApplicationIntegrityError('No role found for the given API');
  }
  //Return role for first match
  return matchingRecord.role;
};

export const authorizeAuth = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const url = req.url;
  const method = req.method;
  const allowedRole = getAllowedRoleForApi(API_ACCESS_AUTH, url, method);
  next();
};

export const authorizeProduct = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const url = req.url;
  const method = req.method;
  const allowedRole = getAllowedRoleForApi(API_ACCESS_PRODUCT, url, method);
  next();
};

export const authorizeSeqService = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const url = req.url;
  const method = req.method;
  const allowedRole = getAllowedRoleForApi(API_ACCESS_SEQ, url, method);
  next();
};

export const protect = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    // console.log('protect: !req.currentUser error');
    throw new NotAuthorizedError();
  } else {
    // console.log('protect: req.currentUser exists');
    next();
  }
};

// User must be an admin
export const admin = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role === 'admin') {
    // console.log('admin: req.currentUser.role = admin');
    next();
  } else {
    // console.log('admin: req.currentUser.role != admin:', req.currentUser?.role);
    throw new NotAuthorizedError();
  }
};
