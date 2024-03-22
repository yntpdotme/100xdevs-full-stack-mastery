import express from 'express';
import cookieParser from 'cookie-parser';

import {authRouter} from '../routes/index.js';
import {errorHandler} from '../middlewares/error.middlewares.js';

const routes = app => {
  app.use(express.json({limit: '16kb'}));
  app.use(cookieParser());
  app.use('/api/v1/auth', authRouter);
  app.use(errorHandler);
};

export default routes;
