const express = require('express');

const app = express()


const m1 = function (req, res, next) {
  console.log('调用局部中间件1');
  next()
}

const m2 = function (req, res, next) {
  console.log('调用局部中间件2');
  next()
}

// 单个局部中间件
app.get('/', m1, (req, res) => {
  throw new Error('服务端出错')
  res.send('get request')
})

// 使用多个局部中间件 m1, m2 或者 [m1, m2]
app.patch('/', [m1, m2], (req, res) => {
  res.send('patch request')
})
 
app.post('/', (req, res) => {
  res.send('post request')
})

// 监听错误中间件 必须放在所有路由之后
app.use((err, req, res, next) => {
  console.log('服务端错误:', err.message);
  res.send('Error' + err.message)
})


app.listen(80, () => {
  console.log('http://127.0.0.1')
})