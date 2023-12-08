import { IApiAccessObj } from '../../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../../constants/role-constants';
import { MICROSERVICE_AUTH } from '../../../constants/access/microservice-names';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessAuth: IApiAccessObj[] = [
  /* get-api-access-records */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-api-access-records',
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-api-access */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'create-api-access',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-api-access */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-api-access',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-api-access-roles */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-api-access-roles',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-api-access */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'delete-api-access',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-roles */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-roles',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-role - body: role */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'create-role',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-role - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'delete-role',
    allowedRoles: [ADMIN_ROLE],
  },
  /* current-user */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'current-user',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'signup',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'signin',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'signout',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'reset-password',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-password',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-user-profile',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-users',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-user-by-id',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-user',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'delete-user',
    allowedRoles: [ADMIN_ROLE],
  },
];
