import app from './app';
import { ENV } from './config/env';

app.listen(ENV.PORT, () => {
  console.log(`HTTP SERVER LISTENING ON PORT ${ENV.PORT}`);
});
