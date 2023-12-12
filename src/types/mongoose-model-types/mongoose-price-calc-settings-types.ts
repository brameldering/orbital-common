import mongoose from 'mongoose';

// Interface describing the PriceCalcSettings object attributes
export interface IPriceCalcSettingsObj {
  vatPercentage: number;
  shippingFee: number;
  thresholdFreeShipping: number;
}

// Interface describing the PriceCalcSettings Model
export interface IPriceCalcSettingsModel
  extends mongoose.Model<IPriceCalcSettingsDoc> {
  build(attrs: IPriceCalcSettingsObj): IPriceCalcSettingsDoc;
}

// Interface describing the PriceCalcSettings Document
export interface IPriceCalcSettingsDoc extends mongoose.Document {
  vatPercentage: number;
  shippingFee: number;
  thresholdFreeShipping: number;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
