// const express = require('express')
const studentModel = require('../Models/studentsModel')

exports.insertStudent = (req , res) => {
    const studentinfo = req.body
    studentModel.create(studentinfo , (err, data) => {
        if(err){
            res.status(401).json({msg : "Create Student Failed"})
        }else{
            res.status(201).json({msg : "Student Create Success" , data : data})
        }
    })
}

exports.readStudent =(req , res) =>{
    let query = {}
    let projection = 'name roll class remarks'
    studentModel.find(query , projection , (err , data) => {
        if(err){
            res.status(401).json({msg : "Data not found"})
        }else{
            res.status(201).json({msg : "data founded" , data : data})
        }
    })
}

//Update Student

exports.updateStudent = (req , res) => {
    let id = req.params.id
    let query = {_id : id}
    let reqBody = req.body

    studentModel.updateOne(query , reqBody , (err , data) => {
        if(err){
            res.status(400).json({msg : "update failed"})
        }else{
            res.status(201).json({msg: "Data update Sucess" , data : data})
        }
    })
}

exports.deleteStudent = (req , res) => {
    let id = req.params.id
    let query = {_id : id}
    studentModel.remove(query , (err , data) => {
        if(err) {
            res.status(401).json({msg: "deleted failed"})
        }else{
            res.status(201).json({msg : "data deleted Success" , data : data})
        }
    })
}