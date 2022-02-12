// 导入模块
const http = require('http')

// 创建服务器实例
const serve = http.createServer()

// 绑定request事件，监听客户端请求
serve.on('request', (req, res) => {
  console.log('url：', req.url)
  console.log('method', req.method)
  console.log('=================================')

  // 防止中文乱码设置响应头
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  // res.end() 向客户端返回内容 结束本次请求
  res.end('hellow world！嗨')
  // console.log(res)
})

// 启动服务器
serve.listen(3000, e => {
  console.log('http run serve 127.0.0.1:3000')
})
