import { IApiAccessAttrs } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import { MICROSERVICE_INVENTORY } from '../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessInventory: IApiAccessAttrs[] = [
  /* get-product-inventory */
  {
    apiName: 'get-product-inventory',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-inventory-by-id - params: id*/
  {
    apiName: 'get-product-inventory-by-id',
    microservice: MICROSERVICE_INVENTORY,
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-product-inventory - params: id */
  {
    apiName: 'update-product-inventory',
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
