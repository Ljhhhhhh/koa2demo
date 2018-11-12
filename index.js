console.log('------', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  require('babel-register')
}

require('babel-polyfill')
// const app = process.env.NODE_ENV === 'development' ? require('./src/app') : require("./dist/app")
const app = require('./src/app')

app.listen(3001, console.log('server is running'))