const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
// const user = require('./router/user')
// const query = require('./router/query')
const {User, Query, Static} = require('./router')
const responseFormatter = require('./middleware/responseFormatter')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)
app.use(static(path.join(__dirname, '../')))

app.use(User.routes()).use(User.allowedMethods())
app.use(Query.routes()).use(Query.allowedMethods())
app.use(Static.routes()).use(Static.allowedMethods())

module.exports = app