import { IApiAccessObj } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessProducts: IApiAccessObj[] = [
  /* upload-file */
  {
    apiName: 'upload-file',
    allowedRoles: [ADMIN_ROLE],
  },
  /* create-product-review - params: id, body: rating, comment */
  {
    apiName: 'create-product-review',
    allowedRoles: [CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-products */
  {
    apiName: 'get-products',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-by-id - params: id*/
  {
    apiName: 'get-product-by-id',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-product */
  {
    apiName: 'create-product',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-product - params: id, body: Product data */
  {
    apiName: 'update-product',
    allowedRoles: [ADMIN_ROLE],
  },
  /* delete-product - params: id */
  {
    apiName: 'delete-product',
    allowedRoles: [ADMIN_ROLE],
  },
];
