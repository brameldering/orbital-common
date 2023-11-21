import {
  IApiAccess,
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
  USERS_URL,
  CURRENT_USER_URL,
  ROLES_URL,
  SIGN_UP_URL,
  SIGN_IN_URL,
  SIGN_OUT_URL,
  UPDATE_PROFILE_URL,
  UPDATE_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from '../index';

export const API_ACCESS_AUTH: IApiAccess[] = [
  /* get-user-roles */
  { api: ROLES_URL, method: 'GET', hasParams: false, role: ANONYMOUS_ROLE },
  /* current-user */
  {
    api: CURRENT_USER_URL,
    method: 'GET',
    hasParams: false,
    role: ANONYMOUS_ROLE,
  },
  /* signup - body: name, email, password, role */
  { api: SIGN_UP_URL, method: 'POST', hasParams: false, role: ANONYMOUS_ROLE },
  /* signin - body: email, password */
  { api: SIGN_IN_URL, method: 'POST', hasParams: false, role: ANONYMOUS_ROLE },
  /* signout */
  { api: SIGN_OUT_URL, method: 'POST', hasParams: false, role: ANONYMOUS_ROLE },
  /* reset-password - body: email */
  {
    api: RESET_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
    role: ANONYMOUS_ROLE,
  },
  /* update-password - body: currentPassword, newPassword */
  {
    api: UPDATE_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
    role: CUSTOMER_ROLE,
  },
  /* update-user-profile - body: name, email */
  {
    api: UPDATE_PROFILE_URL,
    method: 'PUT',
    hasParams: false,
    role: CUSTOMER_ROLE,
  },
  /* get-users */
  { api: USERS_URL, method: 'GET', hasParams: false, role: ADMIN_ROLE },
  /* get-user-by-id - params: id */
  { api: USERS_URL, method: 'GET', hasParams: true, role: ADMIN_ROLE },
  /* update-user - params: id, body: name, email, role */
  { api: USERS_URL, method: 'PUT', hasParams: true, role: ADMIN_ROLE },
  /* delete-user - params: id */
  { api: USERS_URL, method: 'DELETE', hasParams: true, role: ADMIN_ROLE },
];
