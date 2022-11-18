const express = require('express')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const cors =require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const router = require('./Router/studentRouter')


const app = express()

//Security Middlewares
app.use(helmet())
app.use(cors())
app.use(rateLimit({windowMs: 15 * 60 * 1000 , max : 100}))
app.use(mongoSanitize())
app.use(express.json())
app.use(bodyParser.json())


//Routers
app.use('/api/v1' , router)


    

//undefined Router
app.use('*' , (req , res) => {
    res.status(404).json({msg : " 404 not found "})
}) 


// DB Connnection
mongoose
    .connect(process.env.DATABASE)
    .then(console.log("Database Connected"))
    .catch((err) => {console.log(err);})


const PORT = process.env.PORT || 4000
app.listen(PORT , () => {
    console.log("Server is running on port 5000");
})