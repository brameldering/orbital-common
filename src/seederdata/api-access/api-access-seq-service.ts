import { IApiAccessObj, ADMIN_ROLE } from '@orbitelco/common';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessSeqService: IApiAccessObj[] = [
  /* create-sequence-Record - body: sequenceName */
  {
    apiName: 'create-sequence-Record',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-product-seq-id */
  {
    apiName: 'get-product-seq-id',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-order-seq-id */
  {
    apiName: 'get-order-seq-id',
    allowedRoles: [ADMIN_ROLE],
  },
];
