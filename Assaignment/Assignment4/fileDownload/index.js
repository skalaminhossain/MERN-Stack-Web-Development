const express = require('express')
const app = express()

app.get('/download' , (req , res) => {
    res.download('./files/image.jpg')
   
    
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})