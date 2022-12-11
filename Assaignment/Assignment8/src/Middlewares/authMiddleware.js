const jwt = require('jsonwebtoken')

function authenticate(req , res , next){
    let token = req.headers.authorization
    
    if(!token) {
        res.status(400).json({msg : "Invalid Token"})
    }

    jwt.verify(token.split(' ')[1] , "jwt-secret" , (err , decoded) => {
        if(err){
            res.status(400).json({msg : "Invalid Token"})
        }
        else{
            let usrname = decoded['data']['username']
            req.headers.username = usrname
            next()
        }
    })

    
}

module.exports = authenticate