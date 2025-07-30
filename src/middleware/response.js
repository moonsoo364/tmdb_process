export function setupResponseFormat(app) {
  app.use((req, res, next) => {
    res.success = (data, message = '요청이 성공적으로 처리되었습니다.') => {
      res.status(200).json({
        success: true,
        message,
        data
      });
    };

    res.fail = (
      errorMessage = '처리 중 오류가 발생했습니다.',
      statusCode = 400
    ) => {
      res.status(statusCode).json({
        success: false,
        message: errorMessage
      });
    };

    next();
  });
}
