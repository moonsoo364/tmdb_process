import { fetchTv } from '../external_api/index.js';
import {
  insertTvShows,
  selectAllTvShow,
  deleteTvShow
} from '../database/tv_crud.js';
import transformId from './mongo_service.js';

// js에서는 함수 중복이 안되기 때문에 crud 약어를 접두사로 사용

export const insTvShows = async dataList => {
  const result = await insertTvShows(dataList);
  return result;
};

export const selAllTvshows = async () => {
  const results = await selectAllTvShow();
  return results;
};

export const delTvShow = async id => {
  const result = await deleteTvShow(id);
  return result;
};
