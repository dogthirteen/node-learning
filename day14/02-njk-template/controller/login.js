const jsonWebToken = require('jsonwebtoken')
const config = require('../config')

module.exports = {
  handleLogin: (req, res) => {
    const body = req.body

    if (body.username === 'admin' && body.password === '123456') {
      //参数一 待生产参数
      // 参数二 密钥
      // 参数三 token 有效期\
      const token = ` Bearer ${jsonWebToken.sign({ username: body.username }, config.secretKey, { expiresIn: '600s' })}`
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
  }
}