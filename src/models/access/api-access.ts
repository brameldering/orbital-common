import mongoose from 'mongoose';
import {
  IApiAccessObj,
  IApiAccessDoc,
  IApiAccessModel,
} from '../../types/mongoose-model-types/mongoose-access-types';

// ====================== APIs ======================
const apiAccessSchema = new mongoose.Schema(
  {
    microservice: { type: String, required: true },
    apiName: { type: String, required: true },
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

// combination of microservice and apiName has to be unique
apiAccessSchema.index({ microservice: 1, apiName: 1 }, { unique: true });

apiAccessSchema.statics.build = (attrs: IApiAccessObj) => {
  return new ApiAccess(attrs);
};

const ApiAccess = mongoose.model<IApiAccessDoc, IApiAccessModel>(
  'ApiAccess',
  apiAccessSchema
);

export { ApiAccess, apiAccessSchema };
