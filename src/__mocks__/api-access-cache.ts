// Mock version of ApiAccessCache
import { IApiAccessAttrs } from '../types/mongoose-model-types/mongoose-access-types';
import { apiAccessAll } from '../seederdata/api-access/api-access-all';

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

  // Mock fetching the data from MongoDB by assigning apiAccessAll
  async loadCacheFromDB() {
    this._apiAccessCacheData = apiAccessAll;
  }
}

export const apiAccessCache = new ApiAccessCache();
