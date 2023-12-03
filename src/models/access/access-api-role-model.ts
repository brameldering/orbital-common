import mongoose from 'mongoose';
import {
  IApiAccessObj,
  IApiAccessDoc,
  IApiAccessModel,
} from '../../types/mongoose-model-types/mongoose-access-types';
import { roleSchema } from './access-role-model';

// ====================== APIs ======================
const apiAccessSchema = new mongoose.Schema(
  {
    apiUrl: { type: String, required: true },
    apiMethod: { type: String, required: true },
    hasParams: { type: Boolean, required: true },
    allowedRoles: [roleSchema],
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

// combination of apiUrl, apiMethod and hasParams has to be unique
apiAccessSchema.index(
  { apiUrl: 1, apiMethod: 1, allowedRoles: 1 },
  { unique: true }
);

apiAccessSchema.statics.build = (attrs: IApiAccessObj) => {
  return new ApiAccess(attrs);
};

const ApiAccess = mongoose.model<IApiAccessDoc, IApiAccessModel>(
  'ApiAccess',
  apiAccessSchema
);

export { ApiAccess, apiAccessSchema };
