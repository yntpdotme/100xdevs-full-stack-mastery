import {clientPublic as apiClient} from '../client';

const AuthService = {
  signUp: formData => apiClient.post('/auth/signup', formData),

  signIn: formData => apiClient.post('/auth/signin', formData),

  signOut: () => apiClient.get('/auth/logout'),
};

export default AuthService;
