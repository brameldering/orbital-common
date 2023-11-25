import mongoose from 'mongoose';

// =============== OrderItem ===============
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

// =============== OrderTotalAmount ===============
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

// =============== Order ===============
// Interface describing the Order object attributes
export interface IOrderObj {
  // sequenceProductId: string;
  userId: mongoose.Types.ObjectId;
  userName: string;
  userEmail: string;
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
  // user: any;
}

// Interface describing the Order Model
export interface IOrderModel extends mongoose.Model<IOrderDoc> {
  build(attrs: IOrderObj): IOrderDoc;
}

// Interface describing the Order Document
export interface IOrderDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userName: string;
  userEmail: string;
  // sequenceProductId: string;
  userId: mongoose.Types.ObjectId;
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
  user: any;
}
