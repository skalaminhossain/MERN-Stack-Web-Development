const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    Author : {type : String},
    Title : {type : String , unique : true},
    Description : {type : String},
    Status : {type:String , default : "New"},
    CreateDate : {type : Date }
},)

const booksModel = mongoose.model('BookList' , booksSchema)

module.exports = booksModel