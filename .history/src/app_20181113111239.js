const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const user = require('./router/user')
const query = require('./router/query')
const responseFormatter = require('./middleware/responseFormatter')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)
app.use(user.routes()).use(user.allowedMethods())
app.use(query.routes()).use(query.allowedMethods())

module.exports = app