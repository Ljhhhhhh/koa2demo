const Router = require('koa-router')
const router = new Router()
const {setCookie} = require('../controller/cookieController')
router.prefix('/cookie')

router.get('/', function(ctx, next) {
  setCookie(ctx, 'name', 'lujiehui')
})

module.exports = router