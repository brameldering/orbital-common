import { ApiAccess } from '../models/access/api-access-model';
import { IApiAccessAttrs } from '../types/mongoose-model-types/mongoose-access-types';

let apiAccessArray: IApiAccessAttrs[] = [];

export async function updateApiAccessArray() {
  try {
    // Fetch the latest data from MongoDB
    // Load API access rights in original format array
    const apiAccessArrayOriginal = await ApiAccess.find({});
    // map records to json format as defined in apiAccessSchema
    apiAccessArray = apiAccessArrayOriginal.map(
      (apiAccess: { toJSON: () => any }) => apiAccess.toJSON()
    );
    console.log('ApiAccessArray updated.');
  } catch (error) {
    console.error('Error updating API Access Array:', error);
  }
}

export function getCurrentApiAccessArray() {
  return apiAccessArray; // Return the current state of the array
}

// Fetch initial data at module import, such as server start
updateApiAccessArray();
