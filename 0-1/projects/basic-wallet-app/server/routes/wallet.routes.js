import express from 'express';

import {
  getBalance,
  depositeAmount,
  transferAmount,
} from '../controllers/wallet.controllers.js';
import authorization from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.route('/balance').get(authorization, getBalance);
router.route('/deposite').post(authorization, depositeAmount);
router.route('/transfer').post(authorization, transferAmount);

export default router;
