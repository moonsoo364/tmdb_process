import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '../config/index.js';

async function main() {
  const uri = MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI 환경변수가 설정되어 있지 않습니다.');
    process.exit(1);
  }
}
