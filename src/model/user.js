const mongoose = require('./../dbHelper')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  title: String,
  summary: String
}, {collection: 'movies'}) // 需要加上collection指定表名，不然查出的数据是[]，mongoose的梗

module.exports = mongoose.model('User', UserSchema)