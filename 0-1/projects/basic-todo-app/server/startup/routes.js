import express from 'express';

import signupRoute from '../routes/signupRoute.js';
import signinRoute from '../routes/signinRoute.js';
import todoRoutes from '../routes/todoRoutes.js';
import error from '../middleware/error.js';

const routes = app => {
  app.use(express.json());
  app.use('/api/signup', signupRoute);
  app.use('/api/signin', signinRoute);
  app.use('/api/todos', todoRoutes);
  app.use(error);
};

export default routes;
