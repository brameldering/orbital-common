import mongoose from 'mongoose';

// ============================== Roles ==============================
// Interface describing the Role object attributes
export interface IRoleObj {
  role: string;
}

// Interface describing the Role Model
export interface IRoleModel extends mongoose.Model<IRoleDoc> {
  build(attrs: IRoleObj): IRoleDoc;
}

// Interface describing the Role Document
export interface IRoleDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ========================= Api Access =========================
// Interface describing the Api Access object attributes
export interface IApiAccessObj {
  microservice: string;
  apiName: string;
  allowedRoles: string[];
}

// Interface describing the Api Access Model
export interface IApiAccessModel extends mongoose.Model<IApiAccessDoc> {
  build(attrs: IApiAccessObj): IApiAccessDoc;
}

// Interface describing the Api Access Document
export interface IApiAccessDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  microservice: string;
  apiName: string;
  allowedRoles: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
