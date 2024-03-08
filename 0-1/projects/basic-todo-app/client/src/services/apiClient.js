import axios, {CanceledError} from 'axios';

import {getAccessToken} from './tokenStroage';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const token = getAccessToken();

export default axios.create({
  baseURL,
});

export const apiClientAuthenticated = axios.create({
  baseURL,
  withCredentials: true,
  headers: {Authorization: `Bearer ${token}`},
});

export {CanceledError};
