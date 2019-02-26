var Koa = require('koa');
var path = require('path')
const render = require('koa-art-template');
var Router = require('koa-router');
var index = require('./routes/index')

var app = new Koa();
var router = new Router();

// 引入userModel 
var UserModel = require('./mode/user')
UserModel.find({}, (err, doc) => {
  console.log(doc, '213')
})
// 配置模板
render(app, {
  root: path.join(__dirname, 'view'), // 文件名
  extname: '.html', // 后缀名
  debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
});


//使用
app.use(async function (ctx, next) {
  await next();
  if (ctx.status == 404) {
    console.log('404页面')
    ctx.status == 404;
    ctx.body = '这是404页面'
  } else {
    console.log(ctx.url, 333)
  }
});

app
.use(index)
.use(router.allowedMethods());

// 监听端口
app.listen(3000);
