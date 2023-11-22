import mongoose from 'mongoose';

export interface ISequenceIdObj {
  sequenceName: string;
  sequenceCounter: number;
}

export interface ISequenceIdDoc extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  sequenceName: string;
  sequenceCounter: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Interface describing the User Model
export interface ISequenceIdModel extends mongoose.Model<ISequenceIdDoc> {
  build(attrs: ISequenceIdObj): ISequenceIdDoc;
}
