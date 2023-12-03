import mongoose from 'mongoose';
import {
  IOrderSequenceObj,
  IOrderSequenceDoc,
  IOrderSequenceModel,
} from '../../types/mongoose-model-types/mongoose-order-types';

// ====================== OrderSequence ======================
const orderSequenceSchema = new mongoose.Schema({
  latestSeqId: {
    type: Number,
    required: true,
    default: 0,
  },
});

orderSequenceSchema.statics.build = (attrs: IOrderSequenceObj) => {
  return new OrderSequence(attrs);
};

const OrderSequence = mongoose.model<IOrderSequenceDoc, IOrderSequenceModel>(
  'OrderSequence',
  orderSequenceSchema
);
export { OrderSequence, orderSequenceSchema };
