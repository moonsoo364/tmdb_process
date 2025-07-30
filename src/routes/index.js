import express from 'express';
import tvRouter from './tv_router.js';

const router = express.Router();

// 개별 라우터
router.use('/', tvRouter);

export default router;
