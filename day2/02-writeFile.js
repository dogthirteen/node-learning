/**
 * 导入fs模块，操作文件
 */

const fs = require('fs')

/**
 * 使用 fs.writeFile 向指定文件写入内容
 * 参数1: 目标文件路径
 * 参数2：写人内容
 * 参数3：写入内容编码格式  默认utf-8
 * 参数4：回调函数  写入成功或者失败的结果 err
 */
fs.writeFile('./file/t2.txt', 'hellow fs.writeFile', function (err) {
  if (err) {
    console.log('文件写入失败', err.message)
  }
  console.log('文件写入成功')
})
