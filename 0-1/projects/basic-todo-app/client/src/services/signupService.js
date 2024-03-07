import apiClient from './apiClient';

const signupService = {
  signUp: formData => {
    return apiClient.post('/signup', formData);
  },
};

export default signupService;
