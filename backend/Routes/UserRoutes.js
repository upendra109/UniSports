const express = require('express')
const router = express.Router()
const {login,register,logout} = require('../controllers/UserController')


router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logout)

module.exports = router