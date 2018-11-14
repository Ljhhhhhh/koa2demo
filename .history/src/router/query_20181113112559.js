const Router = require('koa-router')
const router = new Router()

router.prefix('/query')

router
  .get('/', function(ctx, next) {
    let url = ctx.url
    let request = ctx.request
    
    ctx.body = 'hello koa!';
  })

module.exports = router