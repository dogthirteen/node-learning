// 引入mysql模块
const mysql = require('mysql');

// 连接数据库
const db = mysql.createPool({
  host: '127.0.0.1', //数据库IP地址
  port: '3306', //数据库端口
  user: 'root', //数据库用户名
  password: 'admin123', //数据库连接密码
  database: 'my_db_01', //数据库名称
})

/* // 测试 mysql 是否连接成功
db.query('select 1', (err, res) => {
  if (err) return console.log(err.message);

  console.log(res);
}) */

/* // 查询数据库中users表所有数据
// sql语句
const sqlStr = 'select * from users'
// 执行 select 查询语句返回结果是一个数组
db.query(sqlStr, (err, res) => {
  if (err) return console.log(err.message);
  console.log(res);
}) */

/* // 向 users表中 新增一条数据 其中值为 {userName:'superMan',password:'super123'}
// 插入数据
const data = { userName: 'superMan', password: 'super123' }
// sql语句
const sqlStr = 'insert into users (userName, password) values (?, ?)'
// 执行  insert into 语句 返回结果为对象
db.query(sqlStr, [data.userName, data.password], (err, res) => {
  if (err) return console.log(err.message);

  if (res.affectedRows === 1) {
    console.log('插入成功', res);
  }
}) */


/* // insert into 便捷插入数据
const data = { userName: 'superMe2', password: 'me1234' }
const sqlStr = 'insert into users set ?'
db.query(sqlStr, data, (err, res) => {
  if (err) return console.log(err.message);

  if (res.affectedRows === 1) {
    console.log('插入成功');
  }
}) */


/* // 更新id值为18的数据  更新值{id:18,userName:'aaaa',password:'123456'}
const data = { id: 18, userName: 'aaaa', password: '123456' }
const sqlStr = 'update users set userName=?,password=? where id=?'

db.query(sqlStr, [data.userName, data.password, data.id,], (err, res) => {
  if (err) return console.log(err.message);
  if (res.affectedRows === 1) {
    console.log('更新成功');
  }
})
 */

// 更新id值为18的数据  更新值{id:18,userName:'aaaa',password:'123456'} 快捷写法
// const data = { id: 18, userName: 'aaa', password: '654321' }
// const sqlStr = 'update users set ? where id=?'

// db.query(sqlStr, [data, data.id], (err, res) => {
//   if (err) return console.log(err.message);

//   if (res.affectedRows === 1) {
//     console.log('更新成功');
//   }

// })

/* // 删除 id为17的数据
const sqlStr = 'delete from users where id=?'

db.query(sqlStr, 17, (err, res) => {
  if (err) return console.log(err.message);
  if (res.affectedRows === 1) {
    console.log('删除成功');
  }
}) */

/* // 标记删除
const sqlStr = 'update users set status=? where id=?'

db.query(sqlStr, [1, 18], (err, res) => {
  if (err) return console.log(err);
  if (res.affectedRows === 1) {
    console.log('标记删除成功');
  }
}) */


