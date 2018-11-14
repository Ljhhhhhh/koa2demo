const static = require('koa-static')
const path = require('path')
const fs = require('fs')
const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))
app.use(async (ctx) => {
  ctx.body = fs.readdirSync(path.join(__dirname, staticPath + ctx.url))
})