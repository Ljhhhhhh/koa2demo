const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
// const user = require('./router/user')
// const query = require('./router/query')
const {User, Query} = require('./router')
const responseFormatter = require('./middleware/responseFormatter')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)

app.use(User.routes()).use(User.allowedMethods())
app.use(Query.routes()).use(Query.allowedMethods())

const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))
app.use(async (ctx) => {
  ctx.body = 'hello static'
})
module.exports = app