const registerModel = require('../Models/registrationModel')

exports.login = (req , res) => {
    const {userName , password} =req.body
    registerModel.find({userName : userName , password : password} , (err , data) => {
        if(err) {
            res.status(401).json({msg: "Failed" , err : err})
        }else{
            if(data.length>0){
                res.status(201).json({msg: "Login Success" , data : data})
            }else{
                res.status(401).json({msg:"unothorize"})
            }
        }
    })
}