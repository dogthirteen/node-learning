const express = require('express');

const app = express()

app.use((req, res, next) => {
  console.log('调用第一个中间件');
  next()
})
app.use((req, res, next) => {
  console.log('调用第二个中间件');
  next()
})


app.get('/', (req, res) => {
  res.send('get request')
})

app.listen(80, () => {
  console.log('serve run http://127.0.0.1')
})