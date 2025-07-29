import axios from 'axios';
import { TMDB_TOKEN } from '../config/index.js';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'content-Type': 'application/json',
    'Accept-Language': 'ko-KR'
  }
});

tmdb.interceptors.request.use(config => {
  const token = TMDB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// tmdb.interceptors.response.use(
//   response => {
//     // 성공적인 응답 로깅
//     console.log('✅ Response:', {
//       url: response.config.url,
//       status: response.status,
//       data: response.data
//     });
//     return response;
//   },
//   error => {
//     // 에러 응답 로깅
//     if (error.response) {
//       console.error('❌ Error Response:', {
//         url: error.config?.url,
//         status: error.response.status,
//         data: error.response.data
//       });
//     } else {
//       console.error('❌ Network or Axios Error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default tmdb;
