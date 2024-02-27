import { PrismaClient } from '@prisma/client';
import { IApiAccessAttrs } from '../types/mongoose-model-types/mongoose-access-types';
import { DatabaseError } from '../types/error-types';

class ApiAccessCachePostgres {
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
  async loadCacheFromDB(inventoryDB: PrismaClient) {
    try {
      // Load API access rights in original format array
      const apiAccessDataOriginal = await inventoryDB.api_access.findMany();
      if (apiAccessDataOriginal.length === 0) {
        throw new Error(
          'ApiAccess table is empty. Probably the data has not yet been initialized/seeded.'
        );
      }
      // map records to json format as defined in apiAccessSchema
      this._apiAccessCacheData = apiAccessDataOriginal;
      // .map(
      //   (apiAccess: { toJSON: () => any }) => apiAccess.toJSON()
      // );
      console.log('ApiAccessData loaded.');
    } catch (error: any) {
      console.error('Error loading API Access Data:', error);
      throw new DatabaseError('Error loading API Access Data');
    }
  }
}

export const apiAccessCachePostgres = new ApiAccessCachePostgres();
