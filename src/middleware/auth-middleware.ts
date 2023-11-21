import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IExtendedRequest } from '../types/request-types';
import { IUserObj } from '../types/user-types';
import {
  NotAuthorizedError,
  ApplicationIntegrityError,
} from '../types/error-types';
import { IApiAccess } from '../api-access/interfaces';
import {
  AUTH_MICROSERVICE,
  PRODUCTS_MICROSERVICE,
  SEQ_SERVICE_MICROSERVICE,
  SEEDER_MICROSERVICE,
} from '../constants/microservice-names';
import { API_ACCESS_AUTH } from '../api-access/api-access-auth';
import { API_ACCESS_PRODUCTS } from '../api-access/api-access-products';
import { API_ACCESS_SEQ } from '../api-access/api-access-seq-service';
import { ANONYMOUS_ROLE } from '../constants/role-constants';

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

// Find and return the allowed roles for the first matchning api, method and whether it has trailing param
const getAllowedRolesForApi = (
  apiArray: IApiAccess[],
  apiUrl: string,
  apiMethod: string
): string[] => {
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
    const errorMessage =
      'getAllowedRoleForApi - No role found for the given API: ' + apiUrl;
    console.log(errorMessage);
    throw new ApplicationIntegrityError(errorMessage);
  }
  //Return role for first match
  return matchingRecord.allowedRoles;
};

export const authorize =
  (microservice: string) =>
  (req: IExtendedRequest, res: Response, next: NextFunction) => {
    const url = req.url;
    const method = req.method;

    let API_ACCESS_TABLE: IApiAccess[];
    switch (microservice) {
      case AUTH_MICROSERVICE:
        API_ACCESS_TABLE = API_ACCESS_AUTH;
        break;
      case PRODUCTS_MICROSERVICE:
        API_ACCESS_TABLE = API_ACCESS_PRODUCTS;
        break;
      case SEQ_SERVICE_MICROSERVICE:
        API_ACCESS_TABLE = API_ACCESS_SEQ;
        break;
      default:
        const errorMessage =
          'Authorize middleware - No Access Table defined for microservice' +
          microservice;
        console.log(errorMessage);
        throw new ApplicationIntegrityError(errorMessage);
    }

    const allowedRoles = getAllowedRolesForApi(API_ACCESS_TABLE, url, method);
    // console.log(
    //   'url ' + req.url + ' method ' + req.method + ' allowedRoles',
    //   allowedRoles
    // );
    let currentUserRole: string;
    if (!req.currentUser) {
      // User is not logged in
      currentUserRole = ANONYMOUS_ROLE;
    } else {
      // User is logged in, assign role
      currentUserRole = req.currentUser.role;
    }
    // Check if role is authorized to access API, if not then raise NotAuthorizedError
    if (!allowedRoles.includes(currentUserRole)) {
      // console.log ('User not authorised to access API');
      throw new NotAuthorizedError();
    }
    next();
  };
