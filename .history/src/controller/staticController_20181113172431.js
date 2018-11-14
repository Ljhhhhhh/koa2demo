const static = require('koa-static')
const path = require('path')
const fs = require('fs')


function staticServer async(ctx) {
  ctx.body = fs.readdirSync(path.join(__dirname, staticPath + ctx.url))
}

module.exports = staticServer