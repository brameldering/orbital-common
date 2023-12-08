import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IExtendedRequest } from '../types/request-types';
import { IUserObj } from '../types/mongoose-model-types/mongoose-user-types';
import {
  NotAuthorizedError,
  ApplicationIntegrityError,
} from '../types/error-types';
import { IApi } from '../types/api-access-types';
import { IApiAccessObj } from '../types/mongoose-model-types/mongoose-access-types';
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

interface ICombinedAccessApiSpec {
  microservice: string;
  apiName: string;
  apiUrl: string;
  method: string;
  hasParams: boolean;
  allowedRoles: string[];
}

// Find and return the allowed roles for the first matchning api, method and whether it has trailing param
const getAllowedRolesAndHasParams = (
  apiArray: ICombinedAccessApiSpec[],
  apiUrl: string,
  apiMethod: string
): string[] => {
  // Check for first match, in other words the order in apiAccessArray matters!
  const matchingRecord = apiArray.find((access) => {
    // Check if an API object in apiArray matches the apiUrl and apiMethod
    if (
      apiMethod === access.method &&
      ((apiUrl === access.apiUrl && !access.hasParams) ||
        (apiUrl.startsWith(access.apiUrl + '?') && !access.hasParams) ||
        (apiUrl.startsWith(access.apiUrl + '/') && access.hasParams))
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
  //Return role and hasParams boolean for first match
  return matchingRecord.allowedRoles;
};

export const authorize =
  (apiSpecs: IApi[], apiAccess: IApiAccessObj[]) =>
  (req: IExtendedRequest, res: Response, next: NextFunction) => {
    const url = req.url;
    const method = req.method;
    // console.log('apiSpecs: ', apiSpecs);
    // console.log('apiAccess: ', apiAccess);
    // combine apiSpecs and apiAccess into one array
    const combinedArray = apiSpecs.map((api) => {
      const accessObj = apiAccess.find(
        (access) => access.apiName === api.apiName
      );
      return {
        microservice: accessObj ? accessObj.microservice : '',
        apiName: api.apiName,
        apiUrl: api.apiUrl,
        method: api.method,
        hasParams: api.hasParams,
        allowedRoles: accessObj ? accessObj.allowedRoles : [], // Assign allowedRoles or an empty array if not found
      };
    });
    // console.log('==> combinedArray: ', combinedArray);
    const allowedRoles = getAllowedRolesAndHasParams(
      combinedArray,
      url,
      method
    );
    // console.log(
    //   'url ' + req.url + ' method ' + req.method + ': ',
    //   allowedRoles
    // );
    let currentUserRole: string;
    if (!req.currentUser) {
      // User is not logged in
      currentUserRole = ANONYMOUS_ROLE;
    } else {
      // User is logged in, identify role
      currentUserRole = req.currentUser.role;
    }
    // Check if role is authorized to access API, if not then raise NotAuthorizedError
    if (!allowedRoles.includes(currentUserRole)) {
      // console.log ('User not authorised to access API');
      throw new NotAuthorizedError();
    }
    // All good, proceed:
    next();
  };
