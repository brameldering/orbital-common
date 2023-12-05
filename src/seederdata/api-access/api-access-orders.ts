import { IApiAccessObj } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  // ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessOrders: IApiAccessObj[] = [
  /* get-paypal-client-id */
  {
    apiName: 'get-paypal-client-id',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-orders */
  {
    apiName: 'get-orders',
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-order */
  {
    apiName: 'create-order',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-my-orders */
  {
    apiName: 'get-my-orders',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-paid - params: order_id */
  {
    apiName: 'update-order-to-paid',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-delivered - params: order_id */
  {
    apiName: 'update-order-to-delivered',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-order-by-id - params: order_id */
  {
    apiName: 'get-order-by-id',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
];
