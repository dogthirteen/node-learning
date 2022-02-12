// npm init 创建package.json文件
  // 运行命令所在文件不能使用中文命名 不能使用中文 空格 
// npm init -y 快速创建

// 引入自定义模块
const DateFormat = require('./03-dateFormat')


// 使用第三方模块
const dateFns = require('date-fns');



console.log(DateFormat.dateFormat(new Date));

console.log(dateFns.format(new Date(), 'yyyy-MM-dd hh:mm:ss'));