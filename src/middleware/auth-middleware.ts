import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IExtendedRequest } from '../types/request-types';
import { IUserObj } from '../types/mongoose-model-types/mongoose-user-types';
import {
  // NotAuthorizedError,
  ApplicationIntegrityError,
} from '../types/error-types';
import { IApiAccess } from '../types/api-access-types';
// import {
//   MICROSERVICE_AUTH,
//   MICROSERVICE_PRODUCTS,
//   MICROSERVICE_ORDERS,
//   MICROSERVICE_SEQUENCES,
// } from '../constants/api-access/microservice-names';
// import { API_ACCESS_AUTH } from '../api-access/api-access-auth';
// import { API_ACCESS_PRODUCTS } from '../api-access/api-access-products';
// import { API_ACCESS_ORDERS } from '../api-access/api-access-orders';
// import { API_ACCESS_SEQ } from '../api-access/api-access-seq-service';
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

interface IAllowedRolesAndHasParams {
  allowedRoles: string[];
  hasParams: boolean;
}

// Find and return the allowed roles for the first matchning api, method and whether it has trailing param
const getAllowedRolesAndHasParams = (
  apiArray: IApiAccess[],
  apiUrl: string,
  apiMethod: string
): IAllowedRolesAndHasParams => {
  // Check for first match, in other words the order in apiArray matters!
  const matchingRecord = apiArray.find((access) => {
    // Check if an API object in apiArray matches the apiUrl and apiMethod
    // if (
    //   apiMethod === access.method &&
    //   ((apiUrl === access.apiUrl && !access.hasParams) ||
    //     (apiUrl.startsWith(access.apiUrl + '?') && !access.hasParams) ||
    //     (apiUrl.startsWith(access.apiUrl + '/') && access.hasParams))
    // ) {
    //   return true;
    // }
    return false;
  });
  // Check if no match is found
  if (!matchingRecord) {
    const errorMessage =
      'getAllowedRoleForApi - No role found for the given API: ' + apiUrl;
    console.log(errorMessage);
    throw new ApplicationIntegrityError(errorMessage);
  }
  //Return role and hasParams boolean for first match
  return {
    allowedRoles: matchingRecord.allowedRoles,
    hasParams: true, //matchingRecord.hasParams,
  };
};

export const authorize =
  (microservice: string) =>
  (req: IExtendedRequest, res: Response, next: NextFunction) => {
    const url = req.url;
    const method = req.method;

    let API_ACCESS_TABLE: IApiAccess[];
    // switch (microservice) {
    //   case MICROSERVICE_AUTH:
    //     API_ACCESS_TABLE = API_ACCESS_AUTH;
    //     break;
    //   case MICROSERVICE_PRODUCTS:
    //     API_ACCESS_TABLE = API_ACCESS_PRODUCTS;
    //     break;
    //   case MICROSERVICE_ORDERS:
    //     API_ACCESS_TABLE = API_ACCESS_ORDERS;
    //     break;
    //   case MICROSERVICE_SEQUENCES:
    //     API_ACCESS_TABLE = API_ACCESS_SEQ;
    //     break;
    //   default:
    //     const errorMessage =
    //       'Authorize middleware - No Access Table defined for microservice' +
    //       microservice;
    //     console.log(errorMessage);
    //     throw new ApplicationIntegrityError(errorMessage);
    // }
    // const { allowedRoles, hasParams } = getAllowedRolesAndHasParams(
    //   API_ACCESS_TABLE,
    //   url,
    //   method
    // );
    // console.log('url ' + req.url + ' method ' + req.method + ': ', allowedRoles);
    let currentUserRole: string;
    if (!req.currentUser) {
      // User is not logged in
      currentUserRole = ANONYMOUS_ROLE;
    } else {
      // User is logged in, identify role
      currentUserRole = req.currentUser.role;
    }
    // Check if role is authorized to access API, if not then raise NotAuthorizedError
    // if (!allowedRoles.includes(currentUserRole)) {
    //   // console.log ('User not authorised to access API');
    //   throw new NotAuthorizedError();
    // }
    // All good, proceed:
    next();
  };
