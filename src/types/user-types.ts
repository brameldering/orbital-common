import mongoose from 'mongoose';

// Interface describing the User object attributes
export interface IUserObj {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

// Interface describing the User Model
export interface IUserModel extends mongoose.Model<IUserDoc> {
  build(attrs: IUserObj): IUserDoc;
}

// Interface describing the User Document
export interface IUserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: string;
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
