import {clientPublic as apiClient, clientPrivate} from '../client';

const AuthService = {
  signUp: formData => apiClient.post('/auth/signup', formData),

  signIn: formData => apiClient.post('/auth/signin', formData),

  signOut: () => clientPrivate.get('/auth/signout'),
};

export default AuthService;
