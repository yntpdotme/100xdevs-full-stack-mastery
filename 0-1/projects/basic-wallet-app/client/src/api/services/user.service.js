import {clientPrivate as apiClient} from '../client';

const UserService = {
  getAllUsers: query => apiClient.get(`/users?filter=${query}`),

  getCurrentUser: () => apiClient.get('/users/me'),

  updateUser: formData => apiClient.patch('/users/me', formData),
};

export default UserService;