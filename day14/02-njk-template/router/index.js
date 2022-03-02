const express = require('express')
const router = express.Router()
const LoginController = require('../controller/login')
const UserController = require('../controller/user')
const PageController = require('../controller/pages')

router.post('/api/login', LoginController.handleLogin)

router.get('/api/getUinfo', UserController.handleGetUserInfo)


router.get('/', PageController.handleRenderIndex)

router.get('/login', PageController.handleRenderLogin)

module.exports = router