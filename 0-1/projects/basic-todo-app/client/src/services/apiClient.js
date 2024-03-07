import axios, {CanceledError} from 'axios';
const baseURL = 'http://localhost:3000/api/';

export default axios.create({
  baseURL,
});

export const apiClientAuthenticated = axios.create({
  baseURL,
  withCredentials: true,
});

export {CanceledError};
