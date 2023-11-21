import { IApiAccess } from './interfaces';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../constants/role-constants';
import {
  PRODUCTS_URL,
  PRODUCT_REVIEW_URL,
  UPLOAD_URL,
} from '../constants/url-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const API_ACCESS_PRODUCTS: IApiAccess[] = [
  /* upload-file */
  {
    apiUrl: UPLOAD_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-product-review - params: id, body: rating, comment */
  {
    apiUrl: PRODUCT_REVIEW_URL,
    method: 'POST',
    hasParams: true,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-products */
  {
    apiUrl: PRODUCTS_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-by-id - params: id*/
  {
    apiUrl: PRODUCTS_URL,
    method: 'GET',
    hasParams: true,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-product */
  {
    apiUrl: PRODUCTS_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-product - params: id, body: Product data */
  {
    apiUrl: PRODUCTS_URL,
    method: 'PUT',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-product - params: id */
  {
    apiUrl: PRODUCTS_URL,
    method: 'DELETE',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
];
