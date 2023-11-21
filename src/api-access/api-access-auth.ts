import { IApiAccess } from '../api-access/interfaces';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../constants/role-constants';
import {
  USERS_URL,
  CURRENT_USER_URL,
  ROLES_URL,
  SIGN_UP_URL,
  SIGN_IN_URL,
  SIGN_OUT_URL,
  UPDATE_PROFILE_URL,
  UPDATE_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from '../constants/url-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const API_ACCESS_AUTH: IApiAccess[] = [
  /* get-user-roles */
  {
    api: ROLES_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* current-user */
  {
    api: CURRENT_USER_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    api: SIGN_UP_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    api: SIGN_IN_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    api: SIGN_OUT_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    api: RESET_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    api: UPDATE_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    api: UPDATE_PROFILE_URL,
    method: 'PUT',
    hasParams: false,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    api: USERS_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    api: USERS_URL,
    method: 'GET',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    api: USERS_URL,
    method: 'PUT',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    api: USERS_URL,
    method: 'DELETE',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
];
