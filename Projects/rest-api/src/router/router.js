const router = require('express').Router()
const ProfileController = require('../contorllers/ProfileControllers')
const AuthVerifyMiddleware =require('../middlewares/AuthVerifyMiddleware')

router.post('/createprofile' , ProfileController.CreateProfile)
router.post('/loginprofile' , ProfileController.LoginProfile)

module.exports = router