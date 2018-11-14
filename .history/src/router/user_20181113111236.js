const Router = require('koa-router')
const UserController = require('./../controller/userController')
const router = new Router()

router.prefix('/user')

router
  .get('/', function(ctx, next) {
    ctx.body = 'hello koa!';
  })
  .get('/getUser', UserController.getAllUser)
  .get('/getUserById', UserController.getUserById)

module.exports = router