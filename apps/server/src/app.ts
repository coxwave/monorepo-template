import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { ENV } from './config/env';
import { successLogger, errorLogger } from './config/morgan';
import { errorConverter, errorHandler } from './middlewares/error';
import router from './routes';
import { ApiError } from './utils/api-error';

const app = express();

/* istanbul ignore next */
if (ENV.NODE_ENV !== 'test') {
  app.use(successLogger);
  app.use(errorLogger);
}

// Middlewares
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// TODO: use strict cors policy? 🤔
app.use(cors());
// TODO: Cookie middleware

// TODO: api rate limiter? 🤔
// if (env === 'production') {
// }

// Routes
app.use('/', router);

// 404 Not Found
app.all('*', (_req, _res, next) => {
  next(new ApiError('NotFound'));
});

// Convert error to ApiError, if needed.
app.use(errorConverter);

// Error Handler
app.use(errorHandler);

export default app;
