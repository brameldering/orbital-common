import mongoose from 'mongoose';
import {
  IPriceCalcSettingsDoc,
  IPriceCalcSettingsModel,
} from '../../types/mongoose-model-types/mongoose-price-calc-settings-types';

// ================= price calculation settings =================
const priceCalcSettingsSchema = new mongoose.Schema({
  vatPercentage: {
    type: Number,
    required: true,
    default: 21,
  },
  shippingFee: {
    type: Number,
    required: true,
    default: 4.5,
  },
  thresholdFreeShipping: {
    type: Number,
    required: true,
    default: 100.0,
  },
});

const PriceCalcSettings = mongoose.model<
  IPriceCalcSettingsDoc,
  IPriceCalcSettingsModel
>('PriceCalcSettings', priceCalcSettingsSchema);

export { PriceCalcSettings, priceCalcSettingsSchema };
