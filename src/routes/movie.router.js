import express from 'express';
import { fetchMovie } from '../external_api/index.js';
const router = express.Router();

router.get('/extern/movie', async (req, res) => {
  const results = await fetchMovie();
  return results;
});

export default router;
