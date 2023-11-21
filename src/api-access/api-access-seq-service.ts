import { IApiAccess } from '../api-access/interfaces';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../constants/role-constants';
import {
  ID_SEQUENCE_URL,
  ID_SEQUENCE_PRODUCTS_URL,
  ID_SEQUENCE_ORDERS_URL,
} from '../constants/url-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const API_ACCESS_SEQ: IApiAccess[] = [
  /* create-sequence-Record - body: sequenceName */
  { api: ID_SEQUENCE_URL, method: 'POST', hasParams: false, role: ADMIN_ROLE },
  /* get-product-seq-id */
  {
    api: ID_SEQUENCE_PRODUCTS_URL,
    method: 'GET',
    hasParams: false,
    role: ADMIN_ROLE,
  },
  /* get-order-seq-id */
  {
    api: ID_SEQUENCE_ORDERS_URL,
    method: 'GET',
    hasParams: false,
    role: ADMIN_ROLE,
  },
];
