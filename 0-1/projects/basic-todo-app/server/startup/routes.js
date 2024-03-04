import express from 'express';

import todoRoutes from '../routes/todoRoutes.js';
import error from '../middleware/error.js';

const routes = app => {
  app.use(express.json());
  app.use('/api/todos', todoRoutes);
  app.use(error);
};

export default routes;
