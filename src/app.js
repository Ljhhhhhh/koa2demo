const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const user = require('./router/index')
const responseFormatter = require('./middleware/responseFormatter')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)
app.use(user.routes()).use(user.allowedMethods())

module.exports = app