const express = require('express')
const app = express()
app.use(express.json())

app.get("/one" , (req , res) => {
    res.send("Simple String response for one route")
})

app.post("/tow" , (req , res) => {
    res.send("Simple String response for tow route")
})

app.get("/three" , (req , res ) => {
    res.status(401).end("Unothorize")
})

app.post("/json" , (req , res) => {
    let jsn = req.body
    console.log(jsn);
    res.send(jsn)
})

app.get("/json" , (req , res) => {
    
    let myJson = [
        {name : "alamin" , age : 21},
        {name : "nazmul" , age : 21}, 
        {name : "bakibillah" , age : 21},
        {name : "delower" , age : 21},

    ]
    res.json(myJson)
})

app.get('/imgdownload' , (req , res) => {
    res.download("./uploads/img.jpg")
})

app.get('/bangladesh' , (req , res) => {
    res.redirect('http://localhost:3000/india')
})

app.get('/india' , (req , res) => {
    res.send("This is india")
})

app.get("/headers" , (req , res) => {
    res.append("Name" , "alamin")
    res.append("City" , "dhaka")
    res.status(201).end("Hello world")
})

app.get('/cookies' , (req , res) => {
    res.cookie("name" , "alamin")
    res.cookie("pass" , "123")
    res.send("cookies created")
})

app.listen(3000 , () => console.log("Server is running"))