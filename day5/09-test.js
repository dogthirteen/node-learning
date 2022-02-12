// 在外界使用require 导入一个自定义模块，得到的成员
// 就是那个模块中  通过module.exportxs 指向的对象
const m = require('./08-自定义模块')

console.log(m.userName )
m.sayHellow()
