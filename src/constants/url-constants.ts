// config
export const GET_PAYPAL_CLIENT_ID_URL: string = '/api/config/v1/paypalclientid';

// Seed Data
export const SEED_DATA_URL = '/api/seeddata/v2';

// Id Sequences
export const ID_SEQUENCE_URL = '/api/idsequence/v2';
export const ID_SEQUENCE_PRODUCTS_URL = '/api/idsequence/v2/products';
export const ID_SEQUENCE_ORDERS_URL = '/api/idsequence/v2/orders';
export const ID_SEQUENCE_CUSTOMERS_URL = '/api/idsequence/v2/customers';
export const ID_SEQUENCE_INVOICES_URL = '/api/idsequence/v2/invoices';

// Auth / Users
export const USERS_URL = '/api/users/v2';
export const SIGN_UP_URL = USERS_URL + '/signup';
export const SIGN_IN_URL = USERS_URL + '/signin';
export const SIGN_OUT_URL = USERS_URL + '/signout';
export const CURRENT_USER_URL = USERS_URL + '/currentuser';
export const RESET_PASSWORD_URL = USERS_URL + '/resetpassword';
export const UPDATE_PASSWORD_URL = USERS_URL + '/updatepassword';
export const UPDATE_PROFILE_URL = USERS_URL + '/profile';
export const ROLES_URL = USERS_URL + '/roles';

// Products
export const PRODUCTS_URL = '/api/products/v2';
export const PRODUCT_REVIEW_URL = PRODUCTS_URL + '/reviews';
export const UPLOAD_URL = PRODUCTS_URL + '/upload';

// Orders
export const ORDERS_URL = '/api/orders/v2';
export const MY_ORDERS_URL = ORDERS_URL + '/mine';
export const UPDATE_ORDER_TO_PAID_URL = ORDERS_URL + '/updatetopaid';
export const UPDATE_ORDER_TO_DELIVERED_URL = ORDERS_URL + '/updatetodelivered';
