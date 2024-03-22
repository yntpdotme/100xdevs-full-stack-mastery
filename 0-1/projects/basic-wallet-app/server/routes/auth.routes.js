import express from 'express';

import {
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/user.controllers.js';

const router = express.Router();

router.route('/signup').post(registerUser);
router.route('/signin').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;
