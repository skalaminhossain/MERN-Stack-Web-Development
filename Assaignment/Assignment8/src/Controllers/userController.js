const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')

exports.userRegister = (req , res) => {
    const userProfile = req.body
    // console.log(userProfile);
    userModel.create(userProfile , (err , data) => {
        if(err){
            res.status(400).json({msg : "Registration Failed " , err : err})
        }else{
            res.status(200).json({msg : "Registration Success" , data : data})
        }
    })
}

exports.userlogin = (req , res) => {
    const {username , password} = req.body
    userModel.find({username , password} , (err , data) => {
        if(err) {
            res.status(400).json({msg : " Login Failed"})
        }else{
            if(data.length > 0){
                let payload = { data : data[0] }
                let token = jwt.sign(payload , "jwt-secret")

                res.status(200).json({token})
            }
        }
    })
}



exports.allUsers = (req , res) => {
    userModel.find({} , (err , data) => {
        if(err){
            res.json({msg : "user not found"})
        }else{
            res.json({msg : "User Found"  , data : data})
        }
    })
}

exports.updateUser = (req , res ) => {
    let userName = req.headers.username
    console.log(userName);
    let updateBody = req.body

    userModel.updateOne({username : userName} , {$set : updateBody} , (err , data) => {
        if(err){
            res.status(400).json({msg : "Update Failed" , err : err})
        }else{
            res.status(200).json({msg : "Update Success" , data : data})
        }
    })
}