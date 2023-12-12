import { IApiAccessObj } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import {
  MICROSERVICE_AUTH,
  MICROSERVICE_PRODUCTS,
  MICROSERVICE_ORDERS,
  MICROSERVICE_SEQUENCES,
} from '../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessAll: IApiAccessObj[] = [
  /* get-api-access-records */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-api-access-records',
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-api-access */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'create-api-access',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-api-access-by-id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-api-access-by-id',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-api-access-roles */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-api-access-roles',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-api-access */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'delete-api-access',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-roles */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-roles',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-role - body: role */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'create-role',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-role - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'delete-role',
    allowedRoles: [ADMIN_ROLE],
  },
  /* current-user */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'current-user',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'signup',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'signin',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'signout',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'reset-password',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-password',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-user-profile',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-users',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'get-user-by-id',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'update-user',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    microservice: MICROSERVICE_AUTH,
    apiName: 'delete-user',
    allowedRoles: [ADMIN_ROLE],
  },
  /* upload-file */
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'upload-file',
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-product-review - params: id, body: rating, comment */
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'create-product-review',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-products */
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'get-products',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-by-id - params: id*/
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'get-product-by-id',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-product */
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'create-product',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-product - params: id, body: Product data */
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'update-product',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-product - params: id */
  {
    microservice: MICROSERVICE_PRODUCTS,
    apiName: 'delete-product',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-paypal-client-id */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'get-paypal-client-id',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-price-calc-settings */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'get-price-calc-settings',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-price-calc-settings */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'update-price-calc-settings',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-orders */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'get-orders',
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-order */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'create-order',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-my-orders */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'get-my-orders',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-paid - params: order_id */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'update-order-to-paid',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-order-to-delivered - params: order_id */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'update-order-to-delivered',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-order-by-id - params: order_id */
  {
    microservice: MICROSERVICE_ORDERS,
    apiName: 'get-order-by-id',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  {
    microservice: MICROSERVICE_SEQUENCES,
    apiName: 'create-sequence-Record',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-product-seq-id */
  {
    microservice: MICROSERVICE_SEQUENCES,
    apiName: 'get-product-seq-id',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-order-seq-id */
  {
    microservice: MICROSERVICE_SEQUENCES,
    apiName: 'get-order-seq-id',
    allowedRoles: [ADMIN_ROLE],
  },
];
