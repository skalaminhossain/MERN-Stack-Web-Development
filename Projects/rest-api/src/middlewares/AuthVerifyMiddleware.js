const jwt = require('jsonwebtoken')

module.exports = (req , res , next) => {
    let Token = req.headers['token-key']
    jwt.verify(Token , "SecretKey123" , (err , decode) => {
        if(err){
            res.status(400).json({msg : "unothorize"})
        }else{
            next()
        }
    })
}