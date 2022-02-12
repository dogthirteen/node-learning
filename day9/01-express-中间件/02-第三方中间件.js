const express = require('express');
const app = express()

// 导入解析表单数据的第三方中间件
const parser = require('body-parser');

app.use(parser.urlencoded())



app.post('/user', (req, res) => {
  console.log(req.body);

  res.send(req.body)
})



app.listen(80, () => {
  console.log('serve run http://127.0.0.1')
})