import { message } from 'antd';
import axiosInstance from './axiosInstance';

const AxiosFetch = () => {
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return error;
    },
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (!error.response) {
        message.error('Network Error');
      } else if (error.response.status === 500) {
        message.error('500 server Error');
      }
      //check status code with backend to handler it
      else if (error.response.status === 400) {
        return error.response;
      }
      //check status code with backend if user has token
      else if (error.response.status === 401) {
        message.error('مجوز شما تایید شده نمی باشد');
        return error.response;
      }

      return error.response;
    },
  );
  return axiosInstance;
};

export default AxiosFetch;
