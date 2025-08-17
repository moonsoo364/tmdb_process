import express from 'express';
import { delTvShow, selAllTvshows } from '../service/tv_service.js';

const router = express.Router();

router.get('/tv-shows', async (req, res) => {
  const results = await selAllTvshows();
  res.success({ results });
});

router.delete('/tv-shows/:id', async (req, res) => {
  const id = req.params.id;
  const result = await delTvShow(id);
  res.success({ result }, `TV SHOW가 삭제되었습니다.`);
});

router.post('/tv-shows', async (req, res) => {
  try {
    const { count, total } = await insertTvShows();
    res.success(
      { count, total },
      `${count}개 TV 쇼 데이터 삽입 완료, 총 ${total}개의 문서가 존재합니다.`
    );
  } catch (err) {
    res.fail('TV 쇼 삽입 중 오류 발생', 500);
  }
});

// router.delete('/clear/tv-shows', async (req, res) => {
//   try {
//     const deletedCount = await deleteAllTvShow();
//     res.success(
//       { deletedCount },
//       `총 ${deletedCount}개의 문서를 삭제했습니다.`
//     );
//   } catch (err) {
//     res.fail('삭제 중 오류 발생', 500);
//   }
// });
export default router;
