const num = 1


// require 引入模块时  得到的永远是 module.exports 指向的 对象
// 优先级在exports 之上
// 同文件中不要同时使用 module.exports  exports

module.exports.age = 12

exports.num = num

exports.sayHellow = function () {
  console.log('hello world');
}