import { fetchTv } from '../external_api/index.js';
import { getAllTvShow, deleteTvShow } from '../database/tv_crud.js';
import transformId from './mongo_service.js';

export const showAllTvshows = async () => {
  const results = await getAllTvShow();
  return { results };
};

export const deleteTvShow = async id => {
  const result = await deleteTvShow(id);
  return { result };
};
