import mongoose from 'mongoose';
import { MONGO_URI } from '../config/index.js';

export const connect = async () => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    await mongoose.connect(MONGO_URI, {
      dbName: 'tmdb'
    });

    console.log('몽고디비 연결 성공');
  } catch (err) {
    console.error('몽고디비 연결 에러:', err);
  }
};

mongoose.connection.on('error', error => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.');
});
