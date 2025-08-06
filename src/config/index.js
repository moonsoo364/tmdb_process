import dotenv from 'dotenv';
import path from 'path';

// .env.local 파일 위치가 프로젝트 루트가 아니면 경로 조정
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// 필요한 환경변수를 상수로 export
export const TMDB_TOKEN = process.env.TMDB_TOKEN;
export const MONGODB_URI = process.env.MONGODB_URI;
export const MONGO_URI = process.env.MONGO_URI;
