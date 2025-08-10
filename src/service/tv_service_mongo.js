import { fetchTv } from '../external_api/index.js';
import {
  clearTvShowCollection,
  connectToDB,
  disconnect,
  insertTvShow
} from '../database/tv_crud.js';
import transformId from './mongo_service.js';
export const insertTvShows = async () => {
  const { results } = await fetchTv();
  const translatedResults = transformId(results);
  await connectToDB();
  const { count, total } = await insertTvShow(translatedResults);
  await disconnect();
  return { count, total };
};

export const deleteAllTvShow = async () => {
  await connectToDB();
  const deletedCount = await clearTvShowCollection();
  await disconnect();
  return deletedCount;
};
