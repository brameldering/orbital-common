// In common/cacheMiddleware.ts
import { Response, NextFunction } from 'express';
import { IExtendedRequest } from '../types/request-types';
import { apiAccessCachePostgres } from './api-access-cache-postgres';

export const cacheMiddlewarePostgres = (
  req: IExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    req.apiAccessCache = apiAccessCachePostgres.cache;
    next();
  } catch (error: any) {
    next(error);
  }
};
