const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const {User, Query} = require('./router')
const responseFormatter = require('./middleware/responseFormatter')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)

app.use(User.routes()).use(User.allowedMethods())
app.use(Query.routes()).use(Query.allowedMethods())

const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))


module.exports = app