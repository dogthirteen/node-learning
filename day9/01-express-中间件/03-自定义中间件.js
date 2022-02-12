const express = require('express');

// querystring 解析字符串数据
const qs = require('querystring')

const app = express()

// app.use(express.json())

// app.use(express.urlencoded())

app.use((req, res, next) => {

  let str = ''

  req.on('data', chunk => {

    str += chunk

  })

  req.on('end', () => {

    // console.log(str);

    const body = qs.parse(str)

    req.body = body

    // next() 需要放在end事件内部   如果放在外部 存在异步情况  next()会先执行导致下级获取body是undefined
    next()
  })


})

app.post('/getBook', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


app.listen(80, () => {
  console.log('serve run http://127.0.0.1')
})