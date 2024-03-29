import {
  PRODUCT_INVENTORY_URL,
  // INVENTORY_QUANTITY_URL,
  INVENTORY_SERIALS_URL,
} from '../url-constants';
import { IApi } from '../../types/api-access-types';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const INVENTORY_APIS: IApi[] = [
  /* get-product-inventory */
  {
    apiName: 'get-product-inventory',
    apiUrl: PRODUCT_INVENTORY_URL,
    method: 'GET',
    hasParams: false,
  },
  /* get-product-inventory-by-id - params: id*/
  {
    apiName: 'get-product-inventory-by-id',
    apiUrl: PRODUCT_INVENTORY_URL,
    method: 'GET',
    hasParams: true,
  },
  /* update-product-inventory - params: id */
  {
    apiName: 'update-product-inventory',
    apiUrl: PRODUCT_INVENTORY_URL,
    method: 'PUT',
    hasParams: true,
  },
  /* get-serial-numbers-by-product-id - params: productId */
  {
    apiName: 'get-serial-numbers-by-product-id',
    apiUrl: INVENTORY_SERIALS_URL,
    method: 'GET',
    hasParams: true,
  },
  /* get-serial-numbers-by-status - params: productId/status */
  {
    apiName: 'get-serial-numbers-by-status',
    apiUrl: INVENTORY_SERIALS_URL,
    method: 'GET',
    hasParams: true,
  },
  /* create-serial-number */
  {
    apiName: 'create-serial-number',
    apiUrl: INVENTORY_SERIALS_URL,
    method: 'POST',
    hasParams: false,
  },
  /* update-serial-number-status - params: productId/serialNumber */
  {
    apiName: 'update-serial-number-status',
    apiUrl: INVENTORY_SERIALS_URL,
    method: 'PUT',
    hasParams: true,
  },
];
