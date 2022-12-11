const router = require('express').Router()
const userProfile = require('../Controllers/userController')
const authenticate = require('../Middlewares/authMiddleware')
const BookList = require('../Controllers/BooklistController')


// User Management Router
router.post('/register' , userProfile.userRegister)
router.post('/login' , userProfile.userlogin )
router.get('/users' , authenticate , userProfile.allUsers)
router.post('/updateUser' ,authenticate, userProfile.updateUser)

// Booklist
router.post('/createbook' , authenticate , BookList.CreateBooks )
router.get('/getBooklist' , authenticate , BookList.GetYourBooks )
router.post('/updateBooklist' , authenticate , BookList.updateBooklist)
router.post('/removeBooklist' , authenticate , BookList.removeBooklist)
router.post('/findBooksByStatus' , authenticate , BookList.findBooksByStatus)


module.exports = router
