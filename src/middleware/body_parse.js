import express from 'express';

export function setupBodyParser(app) {
  // JSON 본문 파싱
  app.use(express.json());

  // URL-encoded 본문 파싱
  app.use(express.urlencoded({ extended: true }));
}
