import express from 'express';

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
  .get(getAllTodos)
  .post(createTodo);

router
  .route('/:id')
  .get(validateObjectId, getTodoById)
  .put(validateObjectId, updateTodoById)
  .delete(validateObjectId, deleteTodoById);

export default router;
