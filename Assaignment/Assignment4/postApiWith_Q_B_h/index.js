const express = require('express')
const app = express()

app.use(express.json())

app.post('/api' , (req , res) => {
    let queryData = req.query.name
    let bodyData = req.body
    let userName = req.header('username')
    let userEmail = req.header('useremail')
})

app.listen(4000 , () => {
    console.log("Server is Running on port 4000");
})