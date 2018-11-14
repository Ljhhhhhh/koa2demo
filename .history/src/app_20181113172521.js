const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const {User, Query} = require('./router')
const responseFormatter = require('./middleware/responseFormatter')
const staticServer = require('./controller/staticController')

const app = new Koa()

app.use(bodyParser())
app.use(responseFormatter)

app.use(User.routes()).use(User.allowedMethods())
app.use(Query.routes()).use(Query.allowedMethods())

const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))
app.use(async (ctx) => {
  ctx.body = fs.readdirSync(path.join(__dirname, staticPath + ctx.url))
})

app.use(async staticController(ctx))


module.exports = app