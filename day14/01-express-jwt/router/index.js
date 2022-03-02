const express = require('express')
const jsonWebToken = require('jsonwebtoken')

const router = express.Router()

const secretKey = 'just do it'

router.post('/login', (req, res) => {
  const body = req.body

  if (body.username === 'admin' && body.password === '123456') {
    //参数一 待生产参数
    // 参数二 密钥
    // 参数三 token 有效期\
    const token = jsonWebToken.sign({ username: body.username }, secretKey, { expiresIn: '60s' })
    res.send({
      code: 1,
      token,
      msg: '登陆成功'
    })

  } else {
    res.send({
      code: 0,
      data: {},
      msg: '账号或密码错误，请重新输入'
    })
  }
})

router.get('/api/getUinfo', (req, res) => {
  res.send({
    code: 1,
    data: req.user,
    msg: '获取成功'
  })
})

module.exports = router