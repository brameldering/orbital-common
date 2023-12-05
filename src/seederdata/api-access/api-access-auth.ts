import { IApiAccessObj } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessAuth: IApiAccessObj[] = [
  /* get-user-roles */
  {
    apiName: 'get-user-roles',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-user-role - body: role */
  {
    apiName: 'create-user-role',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user-role - params: id */
  {
    apiName: 'delete-user-role',
    allowedRoles: [ADMIN_ROLE],
  },
  /* current-user */
  {
    apiName: 'current-user',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    apiName: 'signup',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    apiName: 'signin',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    apiName: 'signout',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    apiName: 'reset-password',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    apiName: 'update-password',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    apiName: 'update-user-profile',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    apiName: 'get-users',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    apiName: 'get-user-by-id',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    apiName: 'update-user',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    apiName: 'delete-user',
    allowedRoles: [ADMIN_ROLE],
  },
];
