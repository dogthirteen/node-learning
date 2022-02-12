const express = require('express');
// 引入自定义路由
const index = require('./router/index');

const app = express()

// app.use 用于注册全局中间件 

// 注册自定义路由
app.use('/', index)


app.listen(80, () => {
  console.log('serve run http://127.0.0.1')
})
