const static = require('koa-static')
const path = require('path')
const fs = require('fs')



const staticPath = './static'

function staticServer (ctx) {
  ctx.body = fs.readdirSync(path.join(__dirname, staticPath + ctx.url))
}

module.exports = staticServer