// 引入插件
const express = require('express');
const fs = require('fs');
const path = require('path');

// 创建 web 服务器实例
const app = express()

// 监听客户端请求
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'node_modules/.bin/mime'), 'utf-8', (err, data) => {
    if (err) {
      res.send('读写错误', err.message)
    } else {
      res.send(data)
    }
  })
})

// 获取url参数 默认{}
app.get('/query', (req, res) => {
  res.send(req.query)
})

// 动态匹配参数 默认{}
app.get('/:id', (req, res) => {
  // 可传入多个动态参数  /:id/:name
  res.send(req.params)
})

app.post('/user', (req, res) => {
  res.send({ name: 'Bob', age: 12 })
})

// 开启服务器
app.listen(8080, () => {
  console.log('serve run http://127.0.0.1:8080');
})

