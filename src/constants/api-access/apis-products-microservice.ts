import { PRODUCTS_URL, PRODUCT_REVIEW_URL, UPLOAD_URL } from '../url-constants';
import { IApi } from '../../types/api-access-types';

// The order of the following array matters.
// It should be the same as the order of routes in the app.ts
// At least make sure that URLs with an ID are placed after matching base URLs

export const PRODUCTS_APIS: IApi[] = [
  /* upload-file */
  {
    apiName: 'upload-file',
    apiUrl: UPLOAD_URL,
    method: 'POST',
    hasParams: false,
  },
  /* create-product-review - params: id, body: rating, comment */
  {
    apiName: 'create-product-review',
    apiUrl: PRODUCT_REVIEW_URL,
    method: 'POST',
    hasParams: true,
  },
  /* get-products */
  {
    apiName: 'get-products',
    apiUrl: PRODUCTS_URL,
    method: 'GET',
    hasParams: false,
  },
  /* get-product-by-id - params: id*/
  {
    apiName: 'get-product-by-id',
    apiUrl: PRODUCTS_URL,
    method: 'GET',
    hasParams: true,
  },
  /* create-product */
  {
    apiName: 'create-product',
    apiUrl: PRODUCTS_URL,
    method: 'POST',
    hasParams: false,
  },
  /* update-product - params: id, body: Product data */
  {
    apiName: 'update-product',
    apiUrl: PRODUCTS_URL,
    method: 'PUT',
    hasParams: true,
  },
  /* delete-product - params: id */
  {
    apiName: 'delete-product',
    apiUrl: PRODUCTS_URL,
    method: 'DELETE',
    hasParams: true,
  },
];
