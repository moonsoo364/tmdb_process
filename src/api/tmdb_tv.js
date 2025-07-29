import tmdb from "./axios.js";
export const movie = "movie show";
let page = 1;
export const fetchTv = async () => {
  try {
      const res = await tmdb.get('discover/tv', {
      params:{
        with_keywords: 180547,
        sort_by: 'first_air_date.desc',
        page: page++,
        language: 'ko-KR',
        'first_air_date.lte': '2025-07-28'
      }
    });

  } catch (e) {
  console.log(e);
}
}