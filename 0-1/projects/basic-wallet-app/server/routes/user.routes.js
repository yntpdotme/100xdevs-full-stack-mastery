import express from 'express';

import {getAllUsers, getCurrentUser, updateCurrentUser} from '../controllers/user.controllers.js';
import authorization from '../middlewares/auth.middlewares.js';

const router = express.Router();

router
	.route('/')
	.get(authorization, getAllUsers);

router
	.route('/me')
	.get(authorization, getCurrentUser)
	.patch(authorization, updateCurrentUser);

export default router;
