/**
 * 响应结果格式化
 * 在app.use(router)之前调用
 */

 const responseFormatter = async (ctx, next) => {
   // 先执行路由
   await next()
   if (ctx.url.startsWith('/user')) {
    console.log('ctx = ', ctx);

    ctx.body = {
      code: 0,
      msg: 'success',
      data: ctx.body
    }
   }
   
 }

 module.exports = responseFormatter