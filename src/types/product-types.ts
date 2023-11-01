import mongoose from 'mongoose';

// Interface describing the Review object attributes
export interface IReviewObj {
  userId: mongoose.Types.ObjectId;
  userName: string;
  rating: number;
  comment: string;
}

// Interface describing the Review Model
export interface IReviewModel extends mongoose.Model<IReviewDoc> {
  build(attrs: IReviewObj): IReviewDoc;
}

// Interface describing the Review Document
export interface IReviewDoc extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  userName: string;
  rating: number;
  comment: string;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// =========================================================

// Interface describing the Product object attributes
export interface IProductObj {
  // sequenceProductId: string;
  name: string;
  imageURL: string;
  brand: string;
  category: string;
  description: string;
  numReviews: number;
  reviews: [IReviewDoc];
  rating?: number;
  price: number;
  countInStock: number;
  userId: mongoose.Types.ObjectId;
}

// Interface describing the Product Model
export interface IProductModel extends mongoose.Model<IProductDoc> {
  build(attrs: IProductObj): IProductDoc;
}

// Interface describing the Product Document
export interface IProductDoc extends mongoose.Document {
  // sequenceProductId: string;
  name: string;
  imageURL: string;
  brand: string;
  category: string;
  description: string;
  numReviews: number;
  reviews: [IReviewDoc];
  rating?: number;
  price: number;
  countInStock: number;
  userId: mongoose.Types.ObjectId;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
