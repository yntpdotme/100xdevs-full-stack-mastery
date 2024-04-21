import express from 'express';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from '../controllers/user.controllers.js';
import authorization from '../middlewares/auth.middlewares.js';

const router = express.Router();

router
  .route('/signup')
  .post(registerUser)

router
  .route('/signin')
  .post(loginUser)

router
  .route('/signout')
  .get(authorization, logoutUser)

router
  .route('/refresh')
  .post(refreshAccessToken)


export default router
