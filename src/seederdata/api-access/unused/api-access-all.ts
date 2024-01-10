import { IApiAccessAttrs } from '../../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../../constants/role-constants';
import {
  MICROSERVICE_AUTH,
  MICROSERVICE_PRODUCTS,
  MICROSERVICE_ORDERS,
  MICROSERVICE_INVENTORY,
} from '../../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessAll: IApiAccessAttrs[] = [
  /* get-api-access-records */
  {
    apiName: 'get-api-access-records',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-api-access */
  {
    apiName: 'create-api-access',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-api-access-by-id */
  {
    apiName: 'get-api-access-by-id',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-api-access-roles */
  {
    apiName: 'update-api-access-roles',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-api-access */
  {
    apiName: 'delete-api-access',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-roles */
  {
    apiName: 'get-roles',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-role - body: role */
  {
    apiName: 'create-role',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-role - params: id */
  {
    apiName: 'delete-role',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* current-user */
  {
    apiName: 'current-user',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signup - body: name, email, password, role */
  {
    apiName: 'signup',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signin - body: email, password */
  {
    apiName: 'signin',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* signout */
  {
    apiName: 'signout',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* reset-password - body: email */
  {
    apiName: 'reset-password',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-password - body: currentPassword, newPassword */
  {
    apiName: 'update-password',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-user-profile - body: name, email */
  {
    apiName: 'update-user-profile',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-users */
  {
    apiName: 'get-users',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-user-by-id - params: id */
  {
    apiName: 'get-user-by-id',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-user - params: id, body: name, email, role */
  {
    apiName: 'update-user',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-user - params: id */
  {
    apiName: 'delete-user',
    microservice: MICROSERVICE_AUTH,
    allowedRoles: [ADMIN_ROLE],
  },
  /* upload-file */
  {
    apiName: 'upload-file',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-product-review - params: id, body: rating, comment */
  {
    apiName: 'create-product-review',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-products */
  {
    apiName: 'get-products',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-by-id - params: id*/
  {
    apiName: 'get-product-by-id',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-product */
  {
    apiName: 'create-product',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-product - params: id, body: Product data */
  {
    apiName: 'update-product',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-product - params: id */
  {
    apiName: 'delete-product',
    microservice: MICROSERVICE_PRODUCTS,
    allowedRoles: [ADMIN_ROLE],
  },
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
  /* get-product-inventory */
  {
    apiName: 'get-product-inventory',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-inventory-by-id - params: id*/
  {
    apiName: 'get-product-inventory-by-id ',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-quantity - params: id */
  {
    apiName: 'update-quantity',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-serial-numbers */
  {
    apiName: 'get-serial-numbers',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-serial-numbers-by-status - params: status */
  {
    apiName: 'get-serial-numbers-by-status',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-serial-number */
  {
    apiName: 'create-serial-number',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-serial-number-status - params: productId/serialNumber */
  {
    apiName: 'update-serial-number-status',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
];
