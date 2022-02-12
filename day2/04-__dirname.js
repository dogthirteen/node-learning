const fs = require('fs')

/**
 * __dirname 表示当前文件所在目录
 * 替代 ./  / 使用
 */

// 读取文件
fs.readFile(__dirname + '/file/成绩.txt', 'utf-8', function (err, dataStr) {
  if (err) {
    console.log('读取失败：', err.message)
    return false
  }
  console.log('读取成功：', dataStr)
})
