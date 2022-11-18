const express = require('express')
const router = require('./src/router/router')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const cors =require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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

module.exports = app