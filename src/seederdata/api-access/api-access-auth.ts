import { IApiAccessAttrs } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import { MICROSERVICE_AUTH } from '../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessAuth: IApiAccessAttrs[] = [
  /* get-api-access-records */
  {
    apiName: 'get-api-access-records',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-api-access */
  {
    apiName: 'create-api-access',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-api-access-by-id */
  {
    apiName: 'get-api-access-by-id',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-api-access-roles */
  {
    apiName: 'update-api-access-roles',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-api-access */
  {
    apiName: 'delete-api-access',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-roles */
  {
    apiName: 'get-roles',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-role - body: role */
  {
    apiName: 'create-role',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-role - params: id */
  {
    apiName: 'delete-role',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* current-user */
  {
    apiName: 'current-user',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    apiName: 'signup',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    apiName: 'signin',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    apiName: 'signout',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    apiName: 'reset-password',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    apiName: 'update-password',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    apiName: 'update-user-profile',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    apiName: 'get-users',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    apiName: 'get-user-by-id',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    apiName: 'update-user',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    apiName: 'delete-user',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
];
