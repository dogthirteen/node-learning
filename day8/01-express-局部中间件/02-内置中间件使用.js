const express = require('express');

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.query);
  res.send(req.body)
})

app.listen(8080, () => {
  console.log('http://127.0.0.1:8080')
})