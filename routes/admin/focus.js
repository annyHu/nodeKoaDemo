var router = require('koa-router')();
// admin 的首页
router.get('/',async (ctx)=>{
  let title = 'admin  首页'
  await ctx.render('index', { //  必须加上await前台才能拿到数据
    title
  })
})
// admin 的增加页
router.get('/add',async (ctx)=>{
  let title = 'admin add'
  await ctx.render('index', { //  必须加上await前台才能拿到数据
    title
  })
})
// admin 的编辑
router.get('/edit', async (ctx)=>{
  let title = 'edit newsName';
  await ctx.render('index', {title})
})
module.exports = router.routes()