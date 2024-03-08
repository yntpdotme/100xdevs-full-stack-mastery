import axios, {CanceledError} from 'axios';

import {getAccessToken} from './tokenStroage';

const baseURL = 'http://localhost:3000/api/';
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
