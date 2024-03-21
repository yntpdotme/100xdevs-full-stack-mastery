import express from 'express';

import {ApiResponse} from '../utils/ApiResponse.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(new ApiResponse(200, "OK", "Test Route"));
});

export default router;
