import express from 'express';
import { fetchMovie } from '../external_api/index.js';
const router = express.Router();

router.get('/extern/movie', async (req, res) => {
  console.log('movie 조회');
  const results = await fetchMovie();
  res.success(results);
});

export default router;
