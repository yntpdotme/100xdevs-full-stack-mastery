import express from 'express';
import cookieParser from 'cookie-parser';

import {authRouter, userRouter, transactionRouter, walletRouter} from '../routes/index.js';
import {errorHandler} from '../middlewares/error.middlewares.js';

const routes = app => {
  app.use(express.json({limit: '16kb'}));
  app.use(cookieParser());
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/wallet', walletRouter);
  app.use('/api/v1/transactions', transactionRouter);
  app.use(errorHandler);
};

export default routes;
