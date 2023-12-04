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
} from '../url-constants';
import { IApi } from '../../types/api-access-types';

export const AUTH_APIS: IApi[] = [
  /* get-user-roles */
  {
    apiName: 'get-user-roles',
    apiUrl: ROLES_URL,
    method: 'GET',
    hasParams: false,
  },
  /* create-user-role - body: role */
  {
    apiName: 'create-user-role',
    apiUrl: ROLES_URL,
    method: 'POST',
    hasParams: false,
  },
  /* delete-user-role - params: id */
  {
    apiName: 'delete-user-role',
    apiUrl: ROLES_URL,
    method: 'DELETE',
    hasParams: true,
  },
  /* current-user */
  {
    apiName: 'current-user',
    apiUrl: CURRENT_USER_URL,
    method: 'GET',
    hasParams: false,
  },
  /* signup - body: name, email, password, role */
  {
    apiName: 'signup',
    apiUrl: SIGN_UP_URL,
    method: 'POST',
    hasParams: false,
  },
  /* signin - body: email, password */
  {
    apiName: 'signin',
    apiUrl: SIGN_IN_URL,
    method: 'POST',
    hasParams: false,
  },
  /* signout */
  {
    apiName: 'signout',
    apiUrl: SIGN_OUT_URL,
    method: 'POST',
    hasParams: false,
  },
  /* reset-password - body: email */
  {
    apiName: 'reset-password',
    apiUrl: RESET_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
  },
  /* update-password - body: currentPassword, newPassword */
  {
    apiName: 'update-password',
    apiUrl: UPDATE_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
  },
  /* update-user-profile - body: name, email */
  {
    apiName: 'update-user-profile',
    apiUrl: UPDATE_PROFILE_URL,
    method: 'PUT',
    hasParams: false,
  },
  /* get-users */
  {
    apiName: 'get-users',
    apiUrl: USERS_URL,
    method: 'GET',
    hasParams: false,
  },
  /* get-user-by-id - params: id */
  {
    apiName: 'get-user-by-id',
    apiUrl: USERS_URL,
    method: 'GET',
    hasParams: true,
  },
  /* update-user - params: id, body: name, email, role */
  {
    apiName: 'update-user',
    apiUrl: USERS_URL,
    method: 'PUT',
    hasParams: true,
  },
  /* delete-user - params: id */
  {
    apiName: 'delete-user',
    apiUrl: USERS_URL,
    method: 'DELETE',
    hasParams: true,
  },
];
