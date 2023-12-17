import { ApiAccess } from '../models/access/api-access-model';
import { IApiAccessAttrs } from '../types/mongoose-model-types/mongoose-access-types';

class ApiAccessCache {
  private _apiAccessCacheData?: IApiAccessAttrs[];

  get cache() {
    if (!this._apiAccessCacheData) {
      throw new Error(
        'Cache data is empty, initialize data first using updateCache'
      );
    }
    return this._apiAccessCacheData;
  }

  // Fetch the data from MongoDB
  async loadCacheFromDB() {
    try {
      // Load API access rights in original format array
      const apiAccessDataOriginal = await ApiAccess.find({});
      // map records to json format as defined in apiAccessSchema
      this._apiAccessCacheData = apiAccessDataOriginal.map(
        (apiAccess: { toJSON: () => any }) => apiAccess.toJSON()
      );
      console.log('ApiAccessData loaded.');
    } catch (error) {
      console.error('Error loading API Access Data:', error);
    }
  }
}

export const apiAccessCache = new ApiAccessCache();
