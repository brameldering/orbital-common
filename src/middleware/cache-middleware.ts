// In common/cacheMiddleware.ts
import { Response, NextFunction } from 'express';
import { IExtendedRequest } from '../types/request-types';
import { apiAccessCache } from './api-access-cache';

const cacheMiddleware = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    req.apiAccessCache = apiAccessCache.cache;
    next();
  } catch (error) {
    next(error);
  }
};

export default cacheMiddleware;
