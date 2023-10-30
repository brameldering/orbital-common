import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IExtendedRequest } from '../types/request-types';
import { IUserObj } from '../types/user-types';
import { NotAuthorizedError } from '../types/error-types';

export const currentUser = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_SECRET!
    ) as IUserObj;
    req.currentUser = payload;
  } catch (err) {
    // do nothing }
  }
  next();
};

export const protect = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};

// User must be an admin
export const admin = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.role === 'admin') {
    next();
  } else {
    throw new NotAuthorizedError();
  }
};
