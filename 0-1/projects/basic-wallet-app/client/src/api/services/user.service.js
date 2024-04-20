import {clientPrivate as apiClient} from '../client';

const UserService = {
  getAllUsers: (search='', page) =>
    apiClient.get(`/users?filter=${search}&page=${page}&limit=5`),

  getCurrentUser: () => apiClient.get('/users/me'),

  updateUser: formData => apiClient.patch('/users/me', formData),
};

export default UserService;
