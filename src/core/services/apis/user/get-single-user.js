import AxiosFetch from '@core/services/AxiosFetch';

async function GetSingleUser(id) {
  try {
    return await AxiosFetch().get(`api/users/${id}`);
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default GetSingleUser;
