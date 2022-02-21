const express = require('express')

const router = express.Router()

router.get('/v1/getUserInfo', (req, res) => {

  const query = req.query || {}

  res.send({
    code: 1,
    data: query,
    message: '请求成功'
  })

})

router.post('/v1/editInfo', (req, res) => {

  const body = req.body || {}

  res.send({
    code: 1,
    data: body,
    message: '请求成功'
  })

})

router.delete('/v1/deleteBook', (req, res) => {

  const body = req.body || {}

  res.send({
    code: 1,
    data: body,
    message: '请求成功'
  })

})



module.exports = router