import { fetchTv } from '../api/index.js';

export const searchTvShows = async () => {
  const data = await fetchTv();
};
