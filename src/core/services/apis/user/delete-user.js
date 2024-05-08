import AxiosFetch from '@core/services/AxiosFetch';

async function DeleteUser(id) {
  try {
    return await AxiosFetch().delete(`api/users/${id}`);
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default DeleteUser;
