import { IApi } from '../api-access/interfaces';
import {
  MICROSERVICE_AUTH,
  MICROSERVICE_PRODUCTS,
  MICROSERVICE_SEQUENCES,
} from '../constants/microservice-names';
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

export const APIS: IApi[] = [
  /* get-user-roles */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: ROLES_URL,
    method: 'GET',
    hasParams: false,
  },
  /* current-user */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: CURRENT_USER_URL,
    method: 'GET',
    hasParams: false,
  },
  /* signup - body: name, email, password, role */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: SIGN_UP_URL,
    method: 'POST',
    hasParams: false,
  },
  /* signin - body: email, password */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: SIGN_IN_URL,
    method: 'POST',
    hasParams: false,
  },
  /* signout */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: SIGN_OUT_URL,
    method: 'POST',
    hasParams: false,
  },
  /* reset-password - body: email */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: RESET_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
  },
  /* update-password - body: currentPassword, newPassword */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: UPDATE_PASSWORD_URL,
    method: 'PUT',
    hasParams: false,
  },
  /* update-user-profile - body: name, email */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: UPDATE_PROFILE_URL,
    method: 'PUT',
    hasParams: false,
  },
  /* get-users */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: USERS_URL,
    method: 'GET',
    hasParams: false,
  },
  /* get-user-by-id - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: USERS_URL,
    method: 'GET',
    hasParams: true,
  },
  /* update-user - params: id, body: name, email, role */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: USERS_URL,
    method: 'PUT',
    hasParams: true,
  },
  /* delete-user - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiUrl: USERS_URL,
    method: 'DELETE',
    hasParams: true,
  },
];
