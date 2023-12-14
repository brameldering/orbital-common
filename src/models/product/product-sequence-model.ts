import mongoose from 'mongoose';
import {
  IProductSequenceAttrs,
  IProductSequenceDoc,
  IProductSequenceModel,
} from '../../types/mongoose-model-types/mongoose-product-types';

// ====================== ProductSequence ======================
const productSequenceSchema = new mongoose.Schema({
  latestSeqId: {
    type: Number,
    required: true,
    default: 0,
  },
});

productSequenceSchema.statics.build = (attrs: IProductSequenceAttrs) => {
  return new ProductSequence(attrs);
};

const ProductSequence = mongoose.model<
  IProductSequenceDoc,
  IProductSequenceModel
>('ProductSequence', productSequenceSchema);

export { ProductSequence, productSequenceSchema };
