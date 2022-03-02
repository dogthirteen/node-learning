const express = require('express')
const cors = require('cors');
const router = require('./router')
const path = require('path')
const expressJWT = require('express-jwt')
const nunjucks = require('nunjucks')
const config = require('./config')
const app = express()

// 配置跨域
app.use(cors())
//解析json参数
app.use(express.json())
//解析url格式编码参数，允许在使用querystring库(false)或qs库(true)解析url编码的数据之间进行选择  使用querystring 解析url参数不会携带 ?
app.use(express.urlencoded({ extended: false }))

// 配置jwt 解析中间件
app.use(expressJWT({
  secret: config.secretKey, //密钥
  algorithms: ['HS256'], //jwt 算法格式
  credentialsRequired: true,//false 不进行jwt校验
}).unless({
  path: ['/favicon.ico', '/', '/login', /^\/css\//, '/api/login',]//不需要验证域名，白名单设置
}))

app.set('views', path.join(__dirname, './views')) //配置 模板文件目录
app.set('view engine', 'njk') //配置模板文件格式为.njk 默认寻找views文件下.njk文件
// 设置模块引擎
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true,//禁用缓存，每次修改模板更新模板内容
});

// 配置静态资源托管
app.use('/', express.static(path.join(__dirname, '/pubilc')))
app.use('/css', express.static(path.join(__dirname, './assets/css')))

// 配置路由
app.use('/', router)

// 捕获异常错误
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.send({
      code: 401,
      msg: '无效token'
    })
  }
  console.log(err);
  res.send({
    code: 500,
    msg: err
  })
})


app.listen(3000, () => {
  console.log('serve run http://127.0.0.1:3000')
})