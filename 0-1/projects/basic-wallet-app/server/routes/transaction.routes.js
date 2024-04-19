import express from 'express';

import {getAllTransactions} from '../controllers/transaction.controllers.js';
import authorization from '../middlewares/auth.middlewares.js';

const router = express.Router();

router
	.route('/')
	.get(authorization, getAllTransactions);

export default router;
