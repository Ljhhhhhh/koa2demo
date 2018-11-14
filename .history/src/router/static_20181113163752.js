const Router = require('koa-router')
// const UserController = require('../controller/userController')
const router = new Router()

router.prefix('/static')

router
  .get('*', function(ctx, next) {
    ctx.body = 'hello static!';
  })

module.exports = router