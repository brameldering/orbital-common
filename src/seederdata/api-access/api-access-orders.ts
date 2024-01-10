import { IApiAccessAttrs } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import { MICROSERVICE_ORDERS } from '../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessOrders: IApiAccessAttrs[] = [
  /* get-paypal-client-id */
  {
    apiName: 'get-paypal-client-id',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-price-calc-settings */
  {
    apiName: 'get-price-calc-settings',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-price-calc-settings */
  {
    apiName: 'update-price-calc-settings',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-orders */
  {
    apiName: 'get-orders',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-order */
  {
    apiName: 'create-order',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-my-orders */
  {
    apiName: 'get-my-orders',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-paid - params: order_id */
  {
    apiName: 'update-order-to-paid',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-delivered - params: order_id */
  {
    apiName: 'update-order-to-delivered',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-order-by-id - params: order_id */
  {
    apiName: 'get-order-by-id',
    microservice: MICROSERVICE_ORDERS,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
];
