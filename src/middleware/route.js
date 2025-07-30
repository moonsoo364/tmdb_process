export function setupRoutes(app) {
  app.use((req, res, next) => {
    console.log('모든 요청에 대해 실행됩니다.');
    next();
  });

  app.post(/^\/tv-show.*/, (req, res, next) => {
    console.log('tv-show로 시작하는 POST 요청에만 실행됩니다.');
    next();
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
  });
}
