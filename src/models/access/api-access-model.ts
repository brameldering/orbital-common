import mongoose from 'mongoose';
import {
  IApiAccessAttrs,
  IApiAccessDoc,
  IApiAccessModel,
} from '../../types/mongoose-model-types/mongoose-access-types';

// ====================== APIs ======================
const apiAccessSchema = new mongoose.Schema(
  {
    microservice: { type: String, required: true },
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

apiAccessSchema.statics.build = (attrs: IApiAccessAttrs) => {
  return new ApiAccess({
    _id: attrs.id,
    microservice: attrs.microservice,
    apiName: attrs.apiName,
    allowedRoles: attrs.allowedRoles,
  });
};

const ApiAccess = mongoose.model<IApiAccessDoc, IApiAccessModel>(
  'ApiAccess',
  apiAccessSchema
);

export { ApiAccess, apiAccessSchema };
