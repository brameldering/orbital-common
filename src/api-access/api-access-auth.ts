import { IApiAccess } from './types';
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
    apiUrl: ROLES_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* current-user */
  {
    apiUrl: CURRENT_USER_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    apiUrl: SIGN_UP_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    apiUrl: SIGN_IN_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    apiUrl: SIGN_OUT_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    apiUrl: RESET_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    apiUrl: UPDATE_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    apiUrl: UPDATE_PROFILE_URL,
    method: 'PUT',
    hasParams: false,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    apiUrl: USERS_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    apiUrl: USERS_URL,
    method: 'GET',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    apiUrl: USERS_URL,
    method: 'PUT',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    apiUrl: USERS_URL,
    method: 'DELETE',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
];
