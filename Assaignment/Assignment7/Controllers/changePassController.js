const registerModel = require('../Models/registrationModel')

exports.changePassword = (req , res) => {
    const {userName , password , newpass} =req.body
    registerModel.find({ userName:userName , password : password} , (err , data) => {
        if(err) {
            res.status(401).json({msg: "Failed" , err : err})
        }else{
            registerModel.updateOne( {userName : userName} , {password:newpass} , (err, data) => {
                if(err){
                    res.status(400).json({msg:"password change failed"})
                }else{
                    res.status(201).json({msg : "Successfully Change password" , data : data})
                }
            })
        }
    })
}