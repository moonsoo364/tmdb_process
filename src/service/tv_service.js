import { fetchTv } from '../external_api/index.js';
import { getAllTvShow } from '../database/tv_crud.js';
import transformId from './mongo_service.js';

export const showAllTvshows = async () => {
  const results = await getAllTvShow();
  return { results };
};
