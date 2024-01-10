import { IApiAccessAttrs } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import { MICROSERVICE_PRODUCTS } from '../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessProducts: IApiAccessAttrs[] = [
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
];
