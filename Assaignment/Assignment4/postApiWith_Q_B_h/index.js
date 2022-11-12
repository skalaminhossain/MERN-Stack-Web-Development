const express = require('express')
const app = express()

app.use(express.json())



app.post('/api' , (req , res) => {
    let queryData = req.query
    let bodyData = req.body
    let userName = req.header('username')
    let userPass = req.header('password')
    let userHeader = `userName : ${userName} , userPassword : ${userPass}`;

    // res.send(queryData)
    // res.send(bodyData)
    res.send(userHeader)
    

    
})

//Test Uri
// Get query Data Uri : http://localhost:4000/api/?name=alamin
// Get body Data Uri : http://localhost:4000/api/
// Example json data for body : {"name":"alamin","age":20}
// Get HeaderData Uri : http://localhost:4000/api/
// Example headerdta for client : ^ userName : alamin , userPassword : alamin123

app.listen(4000 , () => {
    console.log("Server is Running on port 4000");
})