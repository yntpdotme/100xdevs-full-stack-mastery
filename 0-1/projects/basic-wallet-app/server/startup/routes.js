import express from 'express';

import {testRouter} from '../routes/testRouter.js';
import {errorHandler} from '../middlewares/error.middlewares.js';

const routes = app => {
  app.use(express.json());
  app.use('/api/v1/test', testRouter);
  app.use(errorHandler);
};

export default routes;
