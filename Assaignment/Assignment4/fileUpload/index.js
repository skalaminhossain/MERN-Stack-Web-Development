const express = require('express')
const multer = require('multer')

const app = express()

let storage = multer.diskStorage({
    destination : (req , file , cb) => {
        console.log(file);
        cb(null , './uploads')
    },
   
    filename : (req , file , cb) => {
        cb(null , file.originalname)
    },
  
})


let upload = multer({
    storage:storage,
    fileFilter : (req, file , cb) => {
        if(
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpeg"
        ){
            cb(null , true)
        }else{
            cb(new Error("Faild to Upload file"))
        }
    }
})

app.post('/' ,upload.single("myfile") , (req , res) => {
  res.send("Success to Upload")
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})