import express from 'express';

import {getAllUsers, updateUserById} from '../controllers/user.controllers.js';
import authorization from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.route('/').get(authorization, getAllUsers);
router.route('/me').patch(authorization, updateUserById);

export default router;
