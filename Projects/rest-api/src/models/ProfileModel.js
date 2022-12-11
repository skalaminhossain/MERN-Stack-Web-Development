const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        unique:true
    },
    phone : {
        type : String
    },
    city : String,
    userName : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        
    }
})

const ProfileSchema = mongoose.model("Profile" , dataSchema)

module.exports = ProfileSchema