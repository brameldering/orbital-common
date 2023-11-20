import {
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
  PRODUCTS_URL,
  PRODUCT_REVIEW_URL,
  UPLOAD_URL,
  ID_SEQUENCE_URL,
  ID_SEQUENCE_ORDERS_URL,
  ID_SEQUENCE_PRODUCTS_URL,
  SEED_DATA_URL,
} from '../index';

export interface IApiAccess {
  api: string;
  method: string;
  hasParams: boolean;
}

interface IApiAccessByRole {
  role: string;
  apiAccess: IApiAccess[];
}

export const API_ACCESS_BY_ROLE: IApiAccessByRole[] = [
  {
    role: ANONYMOUS_ROLE,
    apiAccess: [
      /* current-user */
      { api: CURRENT_USER_URL, method: 'GET', hasParams: false },
      /* get-user-roles */
      { api: ROLES_URL, method: 'GET', hasParams: false },
      /* signup - body: name, email, password, role */
      { api: SIGN_UP_URL, method: 'POST', hasParams: false },
      /* signin - body: email, password */
      { api: SIGN_IN_URL, method: 'POST', hasParams: false },
      /* signout */
      { api: SIGN_OUT_URL, method: 'POST', hasParams: false },
      /* reset-password - body: email */
      { api: RESET_PASSWORD_URL, method: 'PUT', hasParams: false },
      /* get-products */
      { api: PRODUCTS_URL, method: 'GET', hasParams: false },
      /* get-product-by-id - params: id*/
      { api: PRODUCTS_URL, method: 'GET', hasParams: true },
      /* seed-data */
      { api: SEED_DATA_URL, method: 'POST', hasParams: false },
    ],
  },
  {
    role: CUSTOMER_ROLE,
    apiAccess: [
      /* update-user-profile - body: name, email */
      { api: UPDATE_PROFILE_URL, method: 'PUT', hasParams: false },
      /* update-password - body: currentPassword, newPassword */
      { api: UPDATE_PASSWORD_URL, method: 'PUT', hasParams: false },
      /* create-product-review - params: id, body: rating, comment */
      { api: PRODUCT_REVIEW_URL, method: 'POST', hasParams: true },
    ],
  },
  {
    role: ADMIN_ROLE,
    apiAccess: [
      /* get-users */
      { api: USERS_URL, method: 'GET', hasParams: false },
      /* get-user-by-id - params: id */
      { api: USERS_URL, method: 'GET', hasParams: true },
      /* update-user - params: id, body: name, email, role */
      { api: USERS_URL, method: 'PUT', hasParams: true },
      /* delete-user - params: id */
      { api: USERS_URL, method: 'DELETE', hasParams: true },
      /* create-product */
      { api: PRODUCTS_URL, method: 'POST', hasParams: false },
      /* update-product - params: id, body: Product data */
      { api: PRODUCTS_URL, method: 'PUT', hasParams: true },
      /* delete-product - params: id */
      { api: PRODUCTS_URL, method: 'DELETE', hasParams: true },
      /* upload-file */
      { api: UPLOAD_URL, method: 'POST', hasParams: false },
      /* create-sequence-id - body: sequenceName */
      { api: ID_SEQUENCE_URL, method: 'POST', hasParams: false },
      /* get-order-seq-id */
      { api: ID_SEQUENCE_ORDERS_URL, method: 'GET', hasParams: false },
      /* get-product-seq-id */
      { api: ID_SEQUENCE_PRODUCTS_URL, method: 'GET', hasParams: false },
    ],
  },
];
