import { IApiAccess } from './types';
import { CUSTOMER_ROLE, ADMIN_ROLE } from '../constants/role-constants';
import {
  ORDERS_URL,
  MY_ORDERS_URL,
  UPDATE_ORDER_TO_PAID_URL,
  UPDATE_ORDER_TO_DELIVERED_URL,
} from '../constants/url-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const API_ACCESS_ORDERS: IApiAccess[] = [
  /* get-orders */
  {
    apiUrl: ORDERS_URL,
    method: 'GET',
    hasParams: false,
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-order */
  {
    apiUrl: ORDERS_URL,
    method: 'POST',
    hasParams: false,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-my-orders - - params: user_id*/
  {
    apiUrl: MY_ORDERS_URL,
    method: 'GET',
    hasParams: true,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-paid - params: order_id */
  {
    apiUrl: UPDATE_ORDER_TO_PAID_URL,
    method: 'PUT',
    hasParams: true,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-delivered - params: order_id */
  {
    apiUrl: UPDATE_ORDER_TO_DELIVERED_URL,
    method: 'PUT',
    hasParams: true,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-order-by-id - params: order_id*/
  {
    apiUrl: ORDERS_URL,
    method: 'GET',
    hasParams: true,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
];
