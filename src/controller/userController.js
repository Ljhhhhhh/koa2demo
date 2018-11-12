const mongoose = require('mongoose')
const {User} = require('./../model')

class UserController {
  async getAllUser(ctx) {
    const res = await User.find({})
    ctx.body =res
  }

  async getUserById(ctx) {
    // post body传参方式
    // const id = ctx.request.body.id
    // const res = await User.findById(id)

    // get 获取url问号后的参数，例：XXXX?id=123  通过ctx.request.query(或者ctx.query)得到{id: '123'}
    const id = ctx.query.id
    const res = await User.findById(id)
    ctx.body = res
  }
}

module.exports = new UserController()