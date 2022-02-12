const fs = require('fs')
const path = require('path')

/**
 * path.join() 用来将多个路径怕片段拼接成一个完整的路径字符串
 * ../ 会抵消前面路径 
 */
const pathStr = ['/a', '/b/c', '../', '/c', '/d']
console.log('拼接路径：', path.join(...pathStr))

// 往后文件路径拼接使用 path.join()
fs.readFile(path.join(__dirname, '../day2/file/t1.txt'), 'utf-8', function (err, data) {
  if (err) {
    console.log('读取失败:', err.message)
    return false
  }
  console.log('读取成功：', data)
})

/**
 * path.basename()  用来从字符串中，将文件名解析出来
 */
const filePath = './file/index.html'

console.log('文件名；', path.basename(filePath))

console.log('文件名不带后缀；', path.basename(filePath, '.html'))

/**
 * path.extname 获取路径中扩展名部分
 */
const fileExt = path.extname(filePath)

console.log('扩展名', fileExt)
