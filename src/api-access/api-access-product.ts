import { IApiAccess } from '../api-access/interfaces';
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

export const API_ACCESS_PRODUCT: IApiAccess[] = [
  /* upload-file */
  { api: UPLOAD_URL, method: 'POST', hasParams: false, role: ADMIN_ROLE },
  /* create-product-review - params: id, body: rating, comment */
  {
    api: PRODUCT_REVIEW_URL,
    method: 'POST',
    hasParams: true,
    role: CUSTOMER_ROLE,
  },
  /* get-products */
  { api: PRODUCTS_URL, method: 'GET', hasParams: false, role: ANONYMOUS_ROLE },
  /* get-product-by-id - params: id*/
  { api: PRODUCTS_URL, method: 'GET', hasParams: true, role: ANONYMOUS_ROLE },
  /* create-product */
  { api: PRODUCTS_URL, method: 'POST', hasParams: false, role: ADMIN_ROLE },
  /* update-product - params: id, body: Product data */
  { api: PRODUCTS_URL, method: 'PUT', hasParams: true, role: ADMIN_ROLE },
  /* delete-product - params: id */
  { api: PRODUCTS_URL, method: 'DELETE', hasParams: true, role: ADMIN_ROLE },
];
