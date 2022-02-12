const fs = require('fs')

// 读取文件
fs.readFile('./file/成绩.txt', 'utf-8', function (err, dataStr) {
  if (err) {
    console.log('读取失败')
    return false
  }

  // \r\n 回车换行
  let arr = dataStr.split('\r\n').map((item, index) => {
    return `${index + 1}.${item.replace('=', '：')}`
  })

  console.log('读取成功', dataStr.split(' '), arr)

  // 写入文件
  fs.writeFile(__dirname + '/file/03-test.txt', arr.join('\r\n'), function (err) {
    if (err) {
      console.log('写入失败', err.message)
      return false
    }
    console.log('写入成功')
  })
})
