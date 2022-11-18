const router = require('express').Router()
const registerController = require('../Controllers/registerController')
const loginController = require('../Controllers/loginController')
const changePassword = require('../Controllers/changePassController')

router.post('/registration' , registerController.registration)
router.post('/login' , loginController.login)
router.post('/changepassword' , changePassword.changePassword)

module.exports = router