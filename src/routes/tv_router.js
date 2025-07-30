import express from 'express';
import { insertTvShows } from '../service/tv_service.js';

const router = express.Router();

router.post('/tv-shows', async (req, res) => {
  const { count, total } = await insertTvShows();
  res
    .status(200)
    .send(`${count}개 TV 쇼 데이터 삽입 완료, \n총 ${total} 개 조회됨`);
});

// router.delete('/clear/tv-shows');
export default router;
