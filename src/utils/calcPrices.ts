import { ITotalAmounts } from '../types/common-types';
import { IOrderItemObj } from '../types/mongoose-model-types/mongoose-order-types';

const roundTo2Decimals = (num: number) => {
  return Math.round(num * 100) / 100;
};

export const calcPrices = (
  items: IOrderItemObj[],
  vatPercentage: number,
  shippingFee: number,
  thresholdFreeShipping: number
): ITotalAmounts => {
  const vatFraction: number = vatPercentage / 100;

  // Calculate the total items price
  const itemsPrice = roundTo2Decimals(
    items.reduce(
      (acc: number, item: IOrderItemObj) => acc + item.price * item.qty,
      0
    )
  );
  const shippingPrice = roundTo2Decimals(
    items.length === 0 || itemsPrice > thresholdFreeShipping ? 0 : shippingFee
  );
  const taxPrice = roundTo2Decimals(vatFraction * itemsPrice);
  const totalPrice = roundTo2Decimals(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
