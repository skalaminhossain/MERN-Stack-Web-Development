const registerModel = require('../Models/registrationModel')

exports.registration = (req , res) => {
    let reqbody = req.body
    registerModel.create(reqbody , (err , data) => {
        if(err){
            res.status(401).json({msg:"Registration Failed" , err : err})
        }else{
            res.status(201).json({msg:"Registration Success" , data:data})
        }
    })
}