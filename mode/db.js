// 使用mongoose
const mongoose = require('mongoose')
// Database Name
const dbName = 'eggcms';
// mongoose链接数据库
mongoose.connect(`mongodb://sara:123456@127.0.0.1:27017/${dbName}`, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('数据库连接成功')
})
module.exports = mongoose
