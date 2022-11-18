const app = require('./app.js')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const mongoose = require('mongoose')


// DB Connnection
mongoose
    .connect(process.env.DATABASE)
    .then(console.log("Database Connected"))
    .catch((err) => {console.log(err);})


const PORT = process.env.PORT || 4000
app.listen(PORT , () => {
    console.log("Server is running on port 5000");
})