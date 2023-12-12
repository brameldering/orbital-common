import { IShippingAddress, ITotalAmounts } from './common-types';
import { IPriceCalcSettingsObj } from './mongoose-model-types/mongoose-price-calc-settings-types';

export interface ICart {
  cartItems: Array<ICartItem>;
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  totalAmounts: ITotalAmounts;
}
export interface ICartItem {
  productId: string;
  productName: string;
  imageURL: string;
  price: number;
  countInStock: number;
  qty: number;
}

// To pass to AddToCart reducer
export interface ICartItemWithSettings {
  cartItem: ICartItem;
  priceCalcSettings: IPriceCalcSettingsObj;
}
