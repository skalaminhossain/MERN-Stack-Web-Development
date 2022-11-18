
const userModel = require('../models/users')

const usersInfo = (req , res) => {
    const userdata = req.body
    userModel.create(userdata , (err , data) => {
        if(err) {
            res.status(400).json({msg : "user Crated Failed"})
        }else{
            res.status(201).json({msg : "User Created Success" , data : data})
        }
    })
}
module.exports = usersInfo

exports.signup = (req , res) => {
    res.send("Hello Signup")
}