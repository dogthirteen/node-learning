const express = require('express');

const app = express()

// 通过 express.json() 解析表单中的json格式数据
app.use(express.json())

// 通过 express.urlencoded() 解析表单中 url-encoded 格式数据
app.use(express.urlencoded())

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})

app.post('/getBook', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


app.listen(8080, () => {
  console.log('http://127.0.0.1:8080')
})