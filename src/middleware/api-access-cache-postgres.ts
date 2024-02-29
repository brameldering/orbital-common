import { PrismaClient } from '@prisma/client';
import {
  IApiAccess,
  IApiAccessPostgres,
  IApiAccessPostgresRoleString,
  IApiAccessRolePostgres,
} from '../types/api-access-types';
import { DatabaseError } from '../types/error-types';

class ApiAccessCachePostgres {
  private _apiAccessCacheData?: IApiAccess[];

  get cache() {
    if (!this._apiAccessCacheData) {
      throw new Error(
        'Cache data is empty, initialize data first using updateCache'
      );
    }
    return this._apiAccessCacheData;
  }

  // Fetch the data from Postgres
  async loadCacheFromDB(inventoryDB: PrismaClient) {
    try {
      // Load API access rights in original format array
      console.log('loadCacheFromDB before query');
      const apiAccessDataOriginal: IApiAccessPostgres[] =
        await inventoryDB.api_access.findMany({
          include: {
            allowed_roles: {
              include: {
                role: true,
              },
            },
          },
        });

      console.log('loadCacheFromDB after query');
      if (apiAccessDataOriginal.length === 0) {
        throw new Error(
          'ApiAccess table in Inventory Postgres is empty. Probably the data has not yet been initialized/seeded.'
        );
      }
      // map records to include allowed_roles as strings
      const apiAccessPostgres: IApiAccessPostgresRoleString[] =
        apiAccessDataOriginal.map((apiAccess: IApiAccessPostgres) => ({
          ...apiAccess,
          allowed_roles: apiAccess.allowed_roles.flatMap(
            (role: IApiAccessRolePostgres) => role.role_id
          ),
        }));

      // transform to IApiAccess
      this._apiAccessCacheData = apiAccessPostgres.map((item) => ({
        microservice: item.microservice,
        apiName: item.api_name,
        allowedRoles: item.allowed_roles,
      }));

      console.log('ApiAccessData loaded.');
    } catch (error: any) {
      console.error('Error loading API Access Data:', error);
      throw new DatabaseError('Error loading API Access Data');
    }
  }
}

export const apiAccessCachePostgres = new ApiAccessCachePostgres();
