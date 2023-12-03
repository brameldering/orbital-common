import mongoose from 'mongoose';
import {
  IProductReviewObj,
  IProductReviewDoc,
  IProductReviewModel,
} from '../../types/mongoose-model-types/mongoose-product-types';

// ====================== Review ======================
const productReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    userName: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        // delete ret.__v;
      },
    },
  }
);

productReviewSchema.statics.build = (attrs: IProductReviewObj) => {
  return new ProductReview(attrs);
};

const ProductReview = mongoose.model<IProductReviewDoc, IProductReviewModel>(
  'ProductReview',
  productReviewSchema
);

export { ProductReview, productReviewSchema };
