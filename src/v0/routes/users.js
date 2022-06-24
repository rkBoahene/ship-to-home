const express = require('express')
const router = express.Router()
const {login,logout, register, home} = require('../controllers/users')
const reqAuth = require('../../middleware/auth')

router.route('').get(home)
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout',reqAuth).post(logout)

module.exports = router