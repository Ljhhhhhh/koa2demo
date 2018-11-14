const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const {User, Query, Router} = require('./router')
const responseFormatter = require('./middleware/responseFormatter')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)

app.use(User.routes()).use(User.allowedMethods())
app.use(Query.routes()).use(Query.allowedMethods())
app.use(Router.routes()).use(Router.allowedMethods())

const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))
app.use(async (ctx) => {
  ctx.body = fs.readdirSync(path.join(__dirname, staticPath + ctx.url))
})

module.exports = app