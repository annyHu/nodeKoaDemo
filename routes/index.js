var router = require('koa-router')();

var user = require('./user')
var admin = require('./admin/focus')

router.get('/',async (ctx)=>{
  let title = 'hello 首页'
  await ctx.render('index', { //  必须加上await前台才能拿到数据
    title
  })
})

router.use('/user', user) // user模块作为子路由传入
router.use('/admin', admin) // admin模块作为子路由传入

module.exports = router.routes()