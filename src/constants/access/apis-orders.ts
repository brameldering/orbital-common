import {
  ORDERS_URL,
  MY_ORDERS_URL,
  UPDATE_ORDER_TO_PAID_URL,
  UPDATE_ORDER_TO_DELIVERED_URL,
  GET_PAYPAL_CLIENT_ID_URL,
} from '../url-constants';
import { IApi } from '../../types/api-access-types';

export const ORDERS_APIS: IApi[] = [
  /* get-paypal-client-id */
  {
    apiName: 'get-paypal-client-id',
    apiUrl: GET_PAYPAL_CLIENT_ID_URL,
    method: 'GET',
    hasParams: false,
  },
  /* get-orders */
  {
    apiName: 'get-orders',
    apiUrl: ORDERS_URL,
    method: 'GET',
    hasParams: false,
  },
  /* create-order */
  {
    apiName: 'create-order',
    apiUrl: ORDERS_URL,
    method: 'POST',
    hasParams: false,
  },
  /* get-my-orders */
  {
    apiName: 'get-my-orders',
    apiUrl: MY_ORDERS_URL,
    method: 'GET',
    hasParams: false,
  },
  /* update-order-to-paid - params: order_id */
  {
    apiName: 'update-order-to-paid',
    apiUrl: UPDATE_ORDER_TO_PAID_URL,
    method: 'PUT',
    hasParams: true,
  },
  /* update-order-to-delivered - params: order_id */
  {
    apiName: 'update-order-to-delivered',
    apiUrl: UPDATE_ORDER_TO_DELIVERED_URL,
    method: 'PUT',
    hasParams: true,
  },
  /* get-order-by-id - params: order_id */
  {
    apiName: 'get-order-by-id',
    apiUrl: ORDERS_URL,
    method: 'GET',
    hasParams: true,
  },
];
