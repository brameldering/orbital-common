import mongoose from 'mongoose';
import {
  IApiAccessObj,
  IApiAccessDoc,
  IApiAccessModel,
} from '../../types/mongoose-model-types/mongoose-access-types';

// ====================== APIs ======================
const apiAccessSchema = new mongoose.Schema(
  {
    apiName: { type: String, required: true, unique: true },
    allowedRoles: [String],
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

apiAccessSchema.statics.build = (attrs: IApiAccessObj) => {
  return new ApiAccess(attrs);
};

const ApiAccess = mongoose.model<IApiAccessDoc, IApiAccessModel>(
  'ApiAccess',
  apiAccessSchema
);

export { ApiAccess, apiAccessSchema };
