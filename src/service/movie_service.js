import { fetchMovie } from '../external_api/index.js';

export const insMovie = async () => {
  const dataList = await fetchMovie();
};
