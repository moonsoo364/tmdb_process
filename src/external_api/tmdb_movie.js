import tmdb from './axios.js';
export const movie = 'movie show';
export const fetchMovie = async () => {
  const res = await tmdb.get('discover/movie', {
    params: {
      with_keywords: 180547,
      sort_by: 'primary_release_date.desc',
      language: 'ko-KR',
      'release_date.lte': '2025-07-30'
    }
  });
  return res.data;
};
