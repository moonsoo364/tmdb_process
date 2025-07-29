import tmdb from "./axios.js";
export const movie = "movie show";
const fetchMovie = async () => {
  const res = await tmdb.get('discover/tv', {
    params:{
      with_keywords: 180547,
      sort_by: 'first_a'
    }
  })
}