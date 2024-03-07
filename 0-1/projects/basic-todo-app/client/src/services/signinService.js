import apiClient from './apiClient';

const signinService = {
  signIn: formData => {
    return apiClient.post('/signin', formData);
  },
};

export default signinService;
