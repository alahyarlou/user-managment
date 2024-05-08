import AxiosFetch from '@core/services/AxiosFetch';

async function GetListUsers(pagenation) {
  try {
    return await AxiosFetch().get(`api/users?page=${pagenation}`);
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default GetListUsers;
