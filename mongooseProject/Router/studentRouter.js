const router = require('express').Router()
const studentController = require('../Controllers/studentControllers')

router.post('/insertStudent' , studentController.insertStudent )
router.get('/readStudent' , studentController.readStudent)
router.post('/updateStudent/:id' , studentController.updateStudent)
router.get('/deleteStudent/:id' , studentController.deleteStudent)

module.exports = router