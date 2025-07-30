import { fetchTv } from '../external_api/index.js';
import {
  clearTvShowCollection,
  connectToDB,
  disconnect,
  insertTvShow
} from '../database/tv_crud.js';

export const searchTvShows = async () => {
  const { results } = await fetchTv();
  await connectToDB();
  await insertTvShow(results);
  await clearTvShowCollection();
  disconnect();
};
