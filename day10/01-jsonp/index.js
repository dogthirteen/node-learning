const express = require('express')
const cors = require('cors')

const app = express()

// jsonp 请求需要在 跨域配置之前设置
app.get('/jsonp/getUinfo', (req, res) => {
  // 获取客户端回调函数
  const funcName = req.query.callback

  const data = { name: 'Bob', age: 18 }

  const scriptStr = `${funcName}(${JSON.stringify(data)})`

  res.send(scriptStr)
})

// app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.listen(80, () => {
  console.log('serve run http:127.0.0.1')
})
