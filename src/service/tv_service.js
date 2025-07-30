import { fetchTv } from '../external_api/index.js';
import {
  clearTvShowCollection,
  connectToDB,
  disconnect,
  insertTvShow
} from '../database/tv_crud.js';

export const insertTvShows = async () => {
  const { results } = await fetchTv();
  await connectToDB();
  const { count, total } = await insertTvShow(results);
  await disconnect();
  return { count, total };
};

export const deleteAllTvShow = async () => {
  await connectToDB();
  const deletedCount = await clearTvShowCollection();
  await disconnect();
  return deletedCount;
};
