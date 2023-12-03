import mongoose from 'mongoose';
import {
  IApiObj,
  IApiDoc,
  IApiModel,
} from '../../types/mongoose-model-types/mongoose-access-types';

// ====================== APIs ======================
const apiSchema = new mongoose.Schema(
  {
    apiUrl: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

apiSchema.statics.build = (attrs: IApiObj) => {
  return new Api(attrs);
};

const Api = mongoose.model<IApiDoc, IApiModel>('Api', apiSchema);

export { Api, apiSchema };
