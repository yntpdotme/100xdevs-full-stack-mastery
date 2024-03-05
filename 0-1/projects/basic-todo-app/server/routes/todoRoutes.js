import express from 'express';

import authorization from '../middleware/authorization.js';
import validateObjectId from '../middleware/validateObjectId.js';
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from '../controllers/todoController.js';

const router = express.Router();

router
  .route('/')
  .get(authorization, getAllTodos)
  .post(authorization, createTodo);

router
  .route('/:id')
  .get(validateObjectId, authorization, getTodoById)
  .put(validateObjectId, authorization, updateTodoById)
  .delete(validateObjectId, authorization, deleteTodoById);

export default router;
