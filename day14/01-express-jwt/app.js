const express = require('express')
const cors = require('cors');
const router = require('./router')
const path = require('path')
const expressJWT = require('express-jwt')
const secretKey = 'just do it'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(expressJWT({
  secret: secretKey, //密钥
  algorithms: ['HS256'], //jwt 算法格式
  credentialsRequired: true,//false 不进行jwt校验
}).unless({
  path: [/^\/views\//, '/favicon.ico', '/login',]//不需要验证域名，白名单设置
}))

app.use('/views', express.static(path.join(__dirname, '/pubilc')))


app.use('/', router)


app.use((err, req, res, next) => {

  if (err.name === 'UnauthorizedError') {
    res.send({
      code: 401,
      msg: '无效token'
    })
  }

  res.send({
    code: 500,
    msg: '未知错误'
  })
})


app.listen(80, () => {
  console.log('serve run http://127.0.0.1:80')
})