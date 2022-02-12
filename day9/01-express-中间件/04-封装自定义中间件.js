const express = require('express');

const app = express()

const customBodyParser = require('./middle/custom-body-parser')

app.use(customBodyParser)

app.post('/getBook', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


app.listen(80, () => {
  console.log('serve run http://127.0.0.1')
})