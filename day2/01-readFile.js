/**
 * 导入fs模块，操作文件
 */

const fs = require('fs')

/**
 * 使用fs.readFilde读取文件
 * 参数1：读取文件的存放路径
 * 参数2：读取文件时候采用的编码格式。一般默认指定utf-8
 * 参数3：回调函数，拿到读取失败和成功的结果 err dataStr
 */
fs.readFile('./file/t1.txt', 'utf-8', function (err, dataStr) {
  if (err) {
    console.log('读取文件失败:', err.message)
    return false
  }
  console.log('读取成功:', dataStr)
})
