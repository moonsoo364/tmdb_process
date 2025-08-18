import express from 'express';
import tvRouter from './tv_router.js';
import externMovieRouter from './movie.router.js';

const router = express.Router();

// 개별 라우터
router.use('/', tvRouter);
router.use('/', externMovieRouter);

export default router;
