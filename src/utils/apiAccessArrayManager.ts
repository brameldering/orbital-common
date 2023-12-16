import { ApiAccess } from '../models/access/api-access-model';
import { IApiAccessAttrs } from '../types/mongoose-model-types/mongoose-access-types';

let apiAccessArray: IApiAccessAttrs[] = [];

async function updateApiAccessArray() {
  try {
    apiAccessArray = await getApiAccessArrayFromDB(); // Fetch the latest data from MongoDB
    console.log('ApiAccessArray updated.');
  } catch (error) {
    console.error('Error updating API Access Array:', error);
  }
}

async function getApiAccessArrayFromDB() {
  // ======= api access authorization logic =========
  // Load API access rights in array
  const apiAccessArrayOriginal = await ApiAccess.find({});
  // map records to json format as defined in apiAccessSchema
  const apiAccessArray = apiAccessArrayOriginal.map(
    (apiAccess: { toJSON: () => any }) => apiAccess.toJSON()
  );
  return apiAccessArray;
}

function getCurrentApiAccessArray() {
  return apiAccessArray; // Return the current state of the array
}

// Fetch initial data at server start
updateApiAccessArray();

export { updateApiAccessArray, getCurrentApiAccessArray };
