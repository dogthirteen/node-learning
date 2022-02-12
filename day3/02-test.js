const fs = require('fs')
const path = require('path')

/**
 * 匹配style 标签
 * \s 代表空白字符
 * \S 代表非空白字符
 * *  表示任意次匹配
 */

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './file/index.html'), 'utf-8', function (err, data) {
  if (err) {
    console.log(err.message)
    return false
  }
  resolveCss(data)
  resolveHtml(data)
})
/**
 * @param {params} 读取的css
 * exec 检索字符串 返回匹配值  数组格式  未匹配到返回null
 */

function resolveCss(params) {
  const str = regStyle.exec(params)
  const newCss = str[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(path.join(__dirname, './file/index.css'), newCss, function (err) {
    if (err) {
      console.log('写入失败：', err)
    }
  })
}

function resolveHtml(params) {
  const html = params.replace(regStyle, '<link rel="stylesheet" href="./index.css">')

  fs.writeFile(path.join(__dirname, './file/index2.html'), html, function (err) {
    if (err) {
      console.log('写入失败:', err.message)
    }
  })
}
