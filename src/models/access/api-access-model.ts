import mongoose from 'mongoose';
import {
  IApiAccessAttrs,
  IApiAccessDoc,
  IApiAccessModel,
} from '../../types/mongoose-model-types/mongoose-access-types';

// ====================== APIs ======================
const apiAccessSchema = new mongoose.Schema(
  {
    apiName: { type: String, required: true, unique: true },
    microservice: { type: String, required: true },
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
    apiName: attrs.apiName,
    microservice: attrs.microservice,
    allowedRoles: attrs.allowedRoles,
  });
};

const ApiAccess = mongoose.model<IApiAccessDoc, IApiAccessModel>(
  'ApiAccess',
  apiAccessSchema
);

export { ApiAccess, apiAccessSchema };
