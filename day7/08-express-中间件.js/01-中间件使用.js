const express = require('express');

const app = express()

// 中间件一定要在路由之前调用
// 中间件使用 通过next() 传递
// next 之后不要太使用逻辑代码
// 多个中间件  共享req res对象

// 定义一个简单的中间件函数
// const mw = function (req, res, next) {
//   console.log('定义一个简单的中间件函数');
//   next()
// }

// app.use(mw)

// 简化定义中间件
// app.use((req, res, next) => {
//   console.log('简化中间件');
//   next()
// })

// 体验中间件作用

app.use((req, res, next) => {
  const time = new Date()

  req.startTime = time

  next()
})



app.get('/', (req, res) => {
  res.send('get request' + req.startTime)
})

app.listen(80, () => {
  console.log('serve run http://127.0.0.1')
})