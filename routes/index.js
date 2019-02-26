
var router = require('koa-router')();
var { findData, addData } = require('../mode/index')
var user = require('./user')
var admin = require('./admin/focus')

router.get('/',async (ctx)=>{
  await findData().then((res) => {
    const title = 123
    ctx.render('index', { //  必须加上await前台才能拿到数据
      title,
      list: res
    })
  })
})

router.get('/add',async (ctx)=>{
  const data = {"name": "unada", "age": 20}
  await addData(data).then((res) => {
    const title = 123
    ctx.render('index', { //  必须加上await前台才能拿到数据
      title,
      list: res
    })
  })
})

router.use('/user', user) // user模块作为子路由传入
router.use('/admin', admin) // admin模块作为子路由传入

module.exports = router.routes()