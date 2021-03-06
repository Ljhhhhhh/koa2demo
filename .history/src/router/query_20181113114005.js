const Router = require('koa-router')
const router = new Router()

router.prefix('/query')

router
  .get('/', function(ctx, next) {
    let method = ctx.method
    let url = ctx.url
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    ctx.body = {
      url,
      req_query,
      req_querystring,
      ctx_query,
      ctx_querystring,
      method
    }
  })
  .get('/form')

module.exports = router