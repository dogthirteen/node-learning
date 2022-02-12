const http = require('http')
const fs = require('fs')
const path = require('path')

const serve = http.createServer()

serve.on('request', (req, res) => {
  const { url } = req
  // const filePath = path.join(__dirname, url)
  let filePath = ''

  console.log('请求地址：', url)

  if (url === '/') {
    filePath = path.join(__dirname, './file/index.html')
  } else {
    filePath = path.join(__dirname, './file', url)
  }

  // res.setHeader('Content-Type', 'text/html;charset=utf-8')

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.end('404 Not found')
      return false
    }

    res.end(data)
  })
})

serve.listen(3000, () => {
  console.log('serve runing http:127.0.0.1:3000')
})
