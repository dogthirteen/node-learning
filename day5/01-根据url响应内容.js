const http = require('http')

const serve = http.createServer()

// 根据不同的url响应不同的信息
serve.on('request', (req, res) => {
  const { url } = req
  let content = '<h1>404 Not Found</h1>'
  console.log('请求地址', url)

  if (url === '/' || url === '/index') {
    console.log('访问首页')
    content = '<h1>首页</h1>'
  } else if (url === '/about') {
    console.log('访问关于我们')
    content = '<h1>关于我们</h1>'
  }

  res.setHeader('Content-Type', 'text/html;charset=utf-8')

  res.end(content)
})

serve.listen(3000, () => {
  console.log('serve run http:127.0.0.1:3000')
})
