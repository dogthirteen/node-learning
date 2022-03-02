module.exports = {
  handleGetUserInfo: (req, res) => {
    res.send({
      code: 1,
      data: req.user,
      msg: '获取成功'
    })
  }
}