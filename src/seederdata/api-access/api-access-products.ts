import { IApiAccessObj } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import { MICROSERVICE_PRODUCTS } from '../../constants/access/microservice-names';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessProducts: IApiAccessObj[] = [
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
];
