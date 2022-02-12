const express = require('express')

const v1 = require('./router')

const cors = require('cors');

const app = express()

// // 配置多个白名单
// const whitelist = ['http://127.0.0.1:5500']
// // 增加cors配置
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))

// 自定义控制器配置跨域
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  // 设置响应数据类型
  res.header("Content-Type", "application/json;charset=utf-8");

  if (req.method.toLowerCase() == 'options')
    res.send(204);  //让options尝试请求快速结束
  else {
    next();
  }

})

app.use(express.json())

app.use(express.urlencoded())

app.use('/api', v1)



app.listen(3000, () => {
  console.log('serve run http://127.0.0.1:3000')
})