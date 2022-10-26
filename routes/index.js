var express = require('express')
var controller = require('../controller/Cmain')
var controllerV = require('../controller/Cvisitor')
const router = express.Router()

router.get('/', controller.main)
router.post('/login', controller.login)

var controllerV = require('../controller/Cvisitor')
router.get('/visitor', controllerV.visitor)
router.post('/visitor/post', controllerV.post_visitor)
router.post('/visitor/delete', controllerV.delete_visitor)
router.post('/visitor/get', controllerV.get_visitor)
router.post('/visitor/update', controllerV.update_visitor)

// router.get('/get', controller.get_test)
// router.post('/get/ajax', controller.test)
// router.get('/get/fetch', controller.testttt)

module.exports = router
