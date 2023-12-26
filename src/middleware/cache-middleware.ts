// In common/cacheMiddleware.ts
import { Response, NextFunction } from 'express';
import { IExtendedRequest } from '../types/request-types';
import { apiAccessCache } from './api-access-cache';

export const cacheMiddleware = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    req.apiAccessCache = apiAccessCache.cache;
    next();
  } catch (error: any) {
    next(error);
  }
};
