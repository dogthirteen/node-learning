const express = require('express');
const router = express.Router()

router.post('/v1/login', (req, res) => {

  const body = req.body || {}

  console.log(body);

  // if (body.username !== 'admin' || body.password !== '123456') {
  //   res.send({
  //     code: 0,
  //     data: {},
  //     msg: '账号或密码错误，请重新输入'
  //   })
  // } else {

  req.session.user = body
  req.session.islogin = true
  console.log(1, req.session);
  res.send({
    code: 1,
    data: {},
    msg: '登录成功'
  })
  // }

})

router.post('/v1/logout', (req, res) => {

  req.session.destroy()
  res.send({
    code: 1,
    data: {},
    msg: '退出成功'
  })

})

router.get('/v1/getUinfo', (req, res) => {
  console.log(2, req.session);
  if (!req.session.islogin) {
    res.send({
      code: 10003,
      data: {},
      msg: '请先登录'
    })
  } else {
    res.send({
      code: 1,
      data: req.session,
      msg: '获取成功'
    })
  }

})

module.exports = router
