// Mock version of ApiAccessCache
import { IApiAccessAttrs, apiAccessAll } from '@orbitelco/common';

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
    this._apiAccessCacheData = apiAccessAll;
  }
}

export const apiAccessCache = new ApiAccessCache();
