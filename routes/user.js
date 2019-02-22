var router = require('koa-router')();

router.get('/', async (ctx)=>{
  console.log('3.这是user内容')
  let userName = '3.这是user内容';
  await ctx.render('user', {userName})
})
module.exports = router.routes()