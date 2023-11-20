import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IExtendedRequest } from '../types/request-types';
import { IUserObj } from '../types/user-types';
import { NotAuthorizedError } from '../types/error-types';
import {
  API_ACCESS_BY_ROLE,
  IApiAccess,
} from '../api-access-auth/api-access-by-role';

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

const getAccessByApiAndMethod = (
  apiUrl: string,
  method: string
): { role: string; apiAccess: IApiAccess[] }[] => {
  const matchingAccess: { role: string; apiAccess: IApiAccess[] }[] =
    API_ACCESS_BY_ROLE.reduce(
      (acc, role) => {
        const matchingApiAccess = role.apiAccess.filter(
          (access) => access.api === apiUrl && access.method === method
        );
        if (matchingApiAccess.length > 0) {
          acc.push({ role: role.role, apiAccess: matchingApiAccess });
        }
        return acc;
      },
      [] as { role: string; apiAccess: IApiAccess[] }[] // Type assertion here
    );

  return matchingAccess;
};

export const authorize = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const apiUrl = req.url;
  const apiMethod = req.method;

  const result = getAccessByApiAndMethod(apiUrl, apiMethod);
  console.log(result);
  next();
  /*
  if (!req.currentUser) {
    // console.log('protect: !req.currentUser error');
    throw new NotAuthorizedError();
  } else {
    // console.log('protect: req.currentUser exists');
    next();
  }
  */
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
