const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : String ,
    roll : String,
    class : String,
    remarks : String
})

const studentModel = mongoose.model('student' , studentSchema)
module.exports = studentModel