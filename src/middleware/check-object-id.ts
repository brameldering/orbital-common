// @ts-check
import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

import { DatabaseError } from '../types/error-types';

/*
/ Checks if the req.params.id is a valid Mongoose ObjectId.
*/
function checkIfValidMongoObjectId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!isValidObjectId(req.params.id)) {
    throw new DatabaseError(
      `Received invalid MongoDB ObjectId for:  ${req.params.id}`
    );
  }
  next();
}

export default checkIfValidMongoObjectId;
