const mongoose = require('mongoose')
const config = require('./../config')

mongoose.Promise = global.Promise

// 连接
mongoose.connect((config.DB_URL), {
  useMongoClient: true
});

// 连接成功
mongoose.connection.on('connected', function() {
  console.log('mongoose connection open to ', config.DB_URL);
});

// 连接失败
mongoose.connection.on('error', function(err) {
  console.log('mongoose conection error ' + err);
})

// 断开连接
mongoose.connection.on('disconnected', function() {
  console.log('mongoose connection disconnected');
})

module.exports = mongoose