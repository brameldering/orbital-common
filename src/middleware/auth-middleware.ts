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
