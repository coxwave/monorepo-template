import Router from '@koa/router';

const errorRouter = new Router();

errorRouter.get('/error', (ctx) => {
  throw new Error('Unhandled Error');
});

export default errorRouter;
