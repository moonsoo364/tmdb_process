import express from 'express';
import routes from './src/routes/index.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중`);
})

