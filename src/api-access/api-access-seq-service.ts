import {
  IApiAccess,
  ADMIN_ROLE,
  ID_SEQUENCE_URL,
  ID_SEQUENCE_PRODUCTS_URL,
  ID_SEQUENCE_ORDERS_URL,
} from '../index';

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
