var express = require('express')
var router = express.Router()

// 导入控制器模块
const IndexController = require('../coller/IndexController.js')

// 后台首页
router.get('/', IndexController.index)
// 后台登录页
router.get('/login', IndexController.login)
router.get('/data',IndexController.dade)

module.exports = router;