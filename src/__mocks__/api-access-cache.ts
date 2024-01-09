// Mock version of ApiAccessCache
import { IApiAccessAttrs } from '../types/mongoose-model-types/mongoose-access-types';
import { apiAccessAuth } from '../seederdata/api-access/api-access-auth';
import { apiAccessProducts } from '../seederdata/api-access/api-access-products';
import { apiAccessOrders } from '../seederdata/api-access/api-access-orders';
import { apiAccessInventory } from '../seederdata/api-access/api-access-inventory';

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
    this._apiAccessCacheData = [ ...apiAccessAuth,
    ...apiAccessProducts, ...apiAccessOrders, ...apiAccessInventory
    ];
  }
}

export const apiAccessCache = new ApiAccessCache();
