import express from 'express';
import routes from './src/routes/index.js'
import * as middleware from './src/middleware/index.js';
import { connect } from './src/database/mgs_connector.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
middleware.setupLogger(app);
middleware.setupRoutes(app);
middleware.setupBodyParser(app);
middleware.setupResponseFormat(app);

// db
connect();

app.use('/', routes);
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중`);
})

