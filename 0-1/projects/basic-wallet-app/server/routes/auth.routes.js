import express from 'express';

import {
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/user.controllers.js';
import authorization from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.route('/signup').post(registerUser);
router.route('/signin').post(loginUser);
router.route('/logout').post(authorization, logoutUser);

export default router;
