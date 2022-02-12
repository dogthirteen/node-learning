// 引入插件
const express = require('express');


// 创建实例
const app = express()

// 托管静态资源文件  在指定文件中寻找资源文件  
// 存放资源文件的目录名不会存在 url中
// 代理多个资源文件  书写多个express.static即可
// app.use(express.static('public'))
// app.use(express.static('files'))

// 挂载路径前缀
app.use('public ', express.static('public'))
app.use('files ', express.static('files'))

app.listen(3000, () => {
  console.log('serve run http://127.0.0.1:3000');
})