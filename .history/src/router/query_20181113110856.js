const Router = require('koa-router')
const router = new Router()

router.prefix('/query')

router
  .get('/', function(ctx, next) {
    ctx.body = 'hello koa!';
  })

module.exports = router