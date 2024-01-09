import { IApiAccessAttrs } from '../../types/mongoose-model-types/mongoose-access-types';
import {
  ANONYMOUS_ROLE,
  CUSTOMER_ROLE,
  ADMIN_ROLE,
} from '../../constants/role-constants';
import {
  MICROSERVICE_INVENTORY
} from '../../constants/access/microservice-names';

// The order (within a particular microservice) of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const apiAccessInventory: IApiAccessAttrs[] = [
  /* get-product-inventory */
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'get-product-inventory',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-product-inventory-by-id - params: id*/
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'get-product-inventory-by-id ',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* update-quantity - params: id */
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'update-quantity',
    allowedRoles: [ADMIN_ROLE],
  },
  /* get-serial-numbers */
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'get-serial-numbers',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* get-serial-numbers-by-status - params: status */
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'get-serial-numbers-by-status',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
  /* create-serial-number */
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'create-serial-number',
    allowedRoles: [ADMIN_ROLE],
  },
  /* update-serial-number-status - params: productId/serialNumber */
  {
    microservice: MICROSERVICE_INVENTORY,
    apiName: 'update-serial-number-status',
    allowedRoles: [ANONYMOUS_ROLE, CUSTOMER_ROLE, ADMIN_ROLE],
  },
];
