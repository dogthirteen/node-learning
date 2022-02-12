// 在 自定义模块中，默认情况下，module.export = {}

// 挂载 userName属性
// module.exports.userName = 'as'

// 挂载sayHellow方法
// module.exports.sayHellow = () => {
//   console.log('hellow world')
// }

module.exports = {
  userName: 'Bob',
  sayHellow() {
    console.log('hellow world')
  },
}
