import axios, {CanceledError} from 'axios';

import {getAccessToken} from './tokenStroage';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default axios.create({
  baseURL,
});

export const apiClientAuthenticated = axios.create({
  baseURL,
  withCredentials: true,
});

apiClientAuthenticated.interceptors.request.use(
  function (config) {
    config.headers = {Authorization: `Bearer ${getAccessToken()}`};
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export {CanceledError};
