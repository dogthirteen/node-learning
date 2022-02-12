const express = require('express');

const router = express.Router()


router.get('/', (req, res) => {
  res.send('Get Request')
})


router.post('/', (req, res) => {
  res.send('Post Request')
})


module.exports = router
