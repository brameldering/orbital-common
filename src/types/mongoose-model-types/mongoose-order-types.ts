import mongoose from 'mongoose';

// ================ IOrderContact ================
export interface IOrderContactObj {
  userId: mongoose.Types.ObjectId;
  name: string;
  email: string;
}

// Interface describing the Order Contact Model
export interface IOrderContactModel extends mongoose.Model<IOrderContactDoc> {
  build(attrs: IOrderContactObj): IOrderContactDoc;
}

// Interface describing the Order Contact Document
export interface IOrderContactDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  name: string;
  email: string;
}

// ================ IOrderItem ================
export interface IOrderItemObj {
  productId: mongoose.Types.ObjectId;
  productName: string;
  imageURL: string;
  price: number;
  qty: number;
}

// Interface describing the Order Item Model
export interface IOrderItemModel extends mongoose.Model<IOrderItemDoc> {
  build(attrs: IOrderItemObj): IOrderItemDoc;
}

// Interface describing the Order Item Document
export interface IOrderItemDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  productName: string;
  imageURL: string;
  price: number;
  qty: number;
}

// =============== IOrderTotalAmount ===============
export interface IOrderTotalAmountObj {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

// Interface describing the OrderTotalAmount Model
export interface IOrderTotalAmountModel
  extends mongoose.Model<IOrderTotalAmountDoc> {
  build(attrs: IOrderTotalAmountObj): IOrderTotalAmountDoc;
}

// Interface describing the OrderTotalAmount Document
export interface IOrderTotalAmountDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

// =============== IOrder ===============
// Interface describing the Order object attributes
export interface IOrderObj {
  // sequenceProductId: string;
  userId: mongoose.Types.ObjectId;
  // user: any;
  orderItems: IOrderItemObj[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  paymentResult: {
    id?: string;
    status?: string;
    update_time?: string;
    email_address?: string;
  };
  totalAmounts?: IOrderTotalAmountObj;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// Interface describing the Order Model
export interface IOrderModel extends mongoose.Model<IOrderDoc> {
  build(attrs: IOrderObj): IOrderDoc;
}

// Interface describing the Order Document
export interface IOrderDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  // sequenceProductId: string;
  userId: mongoose.Types.ObjectId;
  // user: any;
  orderItems: mongoose.Types.DocumentArray<IOrderItemDoc>;
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  paymentResult: {
    id?: string;
    status?: string;
    update_time?: string;
    email_address?: string;
  };
  totalAmounts?: IOrderTotalAmountDoc;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
