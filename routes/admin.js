var router = require('koa-router')();
var focus = require('./admin/focus')

router.get('/user', async (ctx)=>{
  console.log('3.这是user内容')
  let userName = '我的英文名字是sara';
  await ctx.render('user', {userName})
})
router.use('/admin', focus)
module.exports = router.routes()