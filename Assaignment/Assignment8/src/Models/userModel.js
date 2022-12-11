const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
    FullName : {
        type : String , 
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
    },
    password : {
        type : String
    }
})

const userModel = mongoose.model('User' , userSchema)

module.exports = userModel