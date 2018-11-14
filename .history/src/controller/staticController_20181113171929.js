const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))
app.use(async (ctx) => {
  ctx.body = fs.readdirSync(path.join(__dirname, staticPath + ctx.url))
})