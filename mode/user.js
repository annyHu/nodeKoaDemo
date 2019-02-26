const mongoose = require('./db')

// 创建数据模型
var UserSchema=mongoose.Schema({
  name: String,
  age:{
    type: Number,
    default: 20
  }
})
// 创建数据模型
var UserModel=mongoose.model('UserList', UserSchema, 'userList');
// 查找
// UserList.find({},(err, doc) => {
//   console.log(doc, 'dddddd')
// })

module.exports = UserModel