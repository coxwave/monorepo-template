import Router from '@koa/router';

const versionRouter = new Router();

versionRouter.get('/version', (ctx) => {
  ctx.body = {
    version: '0.0.0',
  };
});

export default versionRouter;
