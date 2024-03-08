import {apiClientAuthenticated} from './apiClient';

const todoService = {
  getAllTodos: () => {
    const controller = new AbortController();

    const request = apiClientAuthenticated.get('/todos', {
      signal: controller.signal,
    });

    return {request, cancel: () => controller.abort()};
  },

  deleteTodo: id => {
    return apiClientAuthenticated.delete('/todos/' + id);
  },

  createTodo(todo) {
    return apiClientAuthenticated.post('/todos/', todo);
  },

  updateTodo(todo) {
    return apiClientAuthenticated.put('/todos/' + todo._id, todo);
  },
};

export default todoService;
