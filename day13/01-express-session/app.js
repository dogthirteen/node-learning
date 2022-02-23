const express = require('express');
const session = require('express-session')
const cors = require('cors');
const path = require('path');

const api = require('./router')

const app = express()

// app.use(cors())

/* app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  // 配置客户端携带证书式访问 解决跨域情况下无法访问session 设置此配置 配置跨域域名需要单独列出
  res.header("Access-Control-Allow-Credentials", 'true');
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

  // 设置响应数据类型
  res.header("Content-Type", "application/json;charset=utf-8");

  if (req.method.toLowerCase() == 'options')
    res.send(204);  //让options尝试请求快速结束
  else {
    next();
  }

}) */

app.use(session({
  secret: 'admin',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60
  },
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 配置静态资源托管
app.use(express.static(path.join(__dirname + '/pubilc')))

app.use('/api', api)


app.listen(5501, () => {
  console.log('serve run http://127.0.0.1:5501');
})