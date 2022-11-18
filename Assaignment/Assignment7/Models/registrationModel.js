const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type:String,
        required : true
    }
})

const registerModel = mongoose.model('user' , registerSchema)

module.exports = registerModel