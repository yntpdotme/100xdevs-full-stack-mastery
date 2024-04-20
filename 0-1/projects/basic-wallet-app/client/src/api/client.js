import axios, {CanceledError} from 'axios';
import {LocalStorage} from './services';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const createClient = withCredentials => {
  const client = axios.create({
    baseURL,
    withCredentials,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Only add interceptors if the client requires authentication
  if (withCredentials) {
    client.interceptors.request.use(
      async config => {
        config.headers.Authorization = `Bearer ${LocalStorage.get('accessToken')}`;
        return config;
      },
      error => Promise.reject(error),
    );

    client.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error?.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const response = await axios.post(
              `${baseURL.endsWith('/') ? baseURL : `${baseURL}/`}auth/refresh`,
              {refreshToken: LocalStorage.get('refreshToken')},
              {withCredentials: true},
            );
            const {accessToken, refreshToken} = response.data.data;
            LocalStorage.set('accessToken', accessToken);
            LocalStorage.set('refreshToken', refreshToken);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            return axios(originalRequest);
          } catch (refreshError) {
            console.error('Error refreshing token:', refreshError);
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  return client;
};

const clientPublic = createClient(false); // No credentials
const clientPrivate = createClient(true); // With credentials

export {clientPublic, clientPrivate, CanceledError};
