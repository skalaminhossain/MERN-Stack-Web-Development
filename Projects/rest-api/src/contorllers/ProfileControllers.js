const ProfileSchema = require('../models/ProfileModel')
const jwt = require('jsonwebtoken')

exports.CreateProfile = (req , res) => {
    let reqBody = req.body
    ProfileSchema.create(reqBody , (err , data) => {
        if(err){
            res.status(400).json({msg: "Profile Create Failed" , err : err})
        }else{
            res.status(200).json({msg:"Profile Create Success" , data : data})
        }
    })

}

exports.LoginProfile = (req , res) => {
    const {userName , password} = req.body

    ProfileSchema.find({userName:userName , password : password} , (err, data) => {
        if(err) {
            res.status(400).json({msg:"failed"})
        }else{
            if(data.length>0){

                //Create auth Token
                let Payload = {
                    exp : Math.floor(Date.now() / 1000) + (24 *60 * 60),
                    data : data[0]
                }
                let token = jwt.sign(Payload , 'SecretKey123')

                res.status(200).json({msg : "Data Found" ,data : data , token: token})
            }else{
                res.status(400).json({msg: "unothorize"})
            }
        }
    })  
}