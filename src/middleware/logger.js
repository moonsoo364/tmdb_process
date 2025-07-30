import morgan from 'morgan';
// 날짜 포맷 함수 (yyyy-mm-dd hh:mm:ss)
function formatDate() {
  const d = new Date();

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');

  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

// 커스텀 로그 포맷 등록
morgan.format('custom-time', function (tokens, req, res) {
  return [
    formatDate(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res),
    'ms'
  ].join(' ');
});

// app 인수 받아서 미들웨어 등록 함수 내보내기
export function setupLogger(app) {
  const isProduction = process.env.NODE_ENV === 'production';
  const logFormat = isProduction ? 'combined' : 'custom-time';

  app.use(morgan(logFormat));
}
