import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '../config/index.js';

let client = null;
let collection = null;

// deprecated, mongoose를 사용할 예정
export async function connectToDB() {
  const uri = MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI 환경변수가 설정되어 있지 않습니다.');
    process.exit(1);
  }
  client = new MongoClient(uri);
  await client.connect();
  const db = client.db('tmdb');
  collection = db.collection('tv_show');
}

export async function insertTvShow(results) {
  try {
    const result = await collection.insertMany(results);
    console.log(`${result.insertedCount}개의 TV 쇼가 삽입되었습니다.`);

    const total = await collection.countDocuments();
    console.log(`총 ${total}개의 문서가 존재합니다.`);
    return { count: result.insertedCount, total };
  } catch (error) {
    console.error('MongoDB 삽입 중 오류:', error);
  }
}

export async function clearTvShowCollection() {
  try {
    const { deletedCount } = await collection.deleteMany({});
    console.log(`총 ${deletedCount}개의 문서를 삭제했습니다.`);
    return deletedCount;
  } catch (e) {
    console.log(e);
  }
}

export async function disconnect() {
  await client.close();
}
