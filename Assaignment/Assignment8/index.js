const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const router = require("./src/Router/userRouter")


const app = express()

// Application Middlewares
app.use([helmet() , express.json()])

//Router configure
app.use('/api' , router)


//DB connection

mongoose.connect('mongodb://localhost:27017/booklist')
    .then(console.log("DB connected"))
    .catch( (e) => {console.log(e)})

app.listen(4000 , () => {
    console.log("Server is runnig on port 4000");
})