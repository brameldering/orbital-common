import {
  ID_SEQUENCE_URL,
  ID_SEQUENCE_PRODUCTS_URL,
  ID_SEQUENCE_ORDERS_URL,
} from '../url-constants';
import { IApi } from '../../types/api-access-types';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const SEQ_APIS: IApi[] = [
  /* create-sequence-record - body: sequenceName */
  {
    apiName: 'create-sequence-record',
    apiUrl: ID_SEQUENCE_URL,
    method: 'POST',
    hasParams: false,
  },
  /* get-product-seq-id */
  {
    apiName: 'get-product-seq-id',
    apiUrl: ID_SEQUENCE_PRODUCTS_URL,
    method: 'GET',
    hasParams: false,
  },
  /* get-order-seq-id */
  {
    apiName: 'get-order-seq-id',
    apiUrl: ID_SEQUENCE_ORDERS_URL,
    method: 'GET',
    hasParams: false,
  },
];
