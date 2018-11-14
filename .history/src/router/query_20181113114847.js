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
  .get('/form', function(ctx, next) {
    if (ctx.method === 'GET') {
      // 当GET请求时候返回表单页面
      let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/query/form">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>nickName</p>
          <input name="nickName" /><br/>
          <p>email</p>
          <input name="email" /><br/>
          <button type="submit">submit</button>
        </form>
      `
      ctx.body = html
    } else if (ctx.method === 'POST') {
      let postData = ctx.request.body
      ctx.body = postData
      // console.log(object)
    } else {
      ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
  })

module.exports = router