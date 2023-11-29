import mongoose from 'mongoose';
import {
  IReviewObj,
  IReviewDoc,
  IReviewModel,
  IProductSequenceObj,
  IProductSequenceDoc,
  IProductSequenceModel,
  IProductObj,
  IProductDoc,
  IProductModel,
} from '../types/mongoose-model-types/mongoose-product-types';

// ====================== Review ======================
const reviewSchema = new mongoose.Schema(
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
        delete ret.__v;
      },
    },
  }
);

reviewSchema.statics.build = (attrs: IReviewObj) => {
  return new Review(attrs);
};

const Review = mongoose.model<IReviewDoc, IReviewModel>('Review', reviewSchema);

// ====================== ProductSequence ======================
const productSequenceSchema = new mongoose.Schema({
  latestSeqId: {
    type: Number,
    required: true,
    default: 0,
  },
});

productSequenceSchema.statics.build = (attrs: IProductSequenceObj) => {
  return new ProductSequence(attrs);
};

const ProductSequence = mongoose.model<
  IProductSequenceDoc,
  IProductSequenceModel
>('ProductSequence', productSequenceSchema);

// ====================== Product ======================
const productSchema = new mongoose.Schema(
  {
    sequentialProductId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imageURL: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

productSchema.statics.build = (attrs: IProductObj) => {
  return new Product(attrs);
};

const Product = mongoose.model<IProductDoc, IProductModel>(
  'Product',
  productSchema
);

export {
  Review,
  Product,
  ProductSequence,
  reviewSchema,
  productSchema,
  productSequenceSchema,
};
