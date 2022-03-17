import app from './app';
import { ENV } from './config/env';
import { logger } from './config/logger';

app.listen(ENV.PORT, () => {
  logger.info(`HTTP SERVER LISTENING ON PORT ${ENV.PORT}`);
});
