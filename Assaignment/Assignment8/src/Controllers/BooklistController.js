const booksModel = require('../Models/BooksModel')

exports.CreateBooks = (req , res) => {
    const {Title , Description , Status } = req.body
    
    let username = req.headers.username
    console.log(username);
    let status = 'New'
    let CreateDate = Date.now()

    BookInfoBody = {
        Author : username,
        Title : Title,
        Description : Description,
        Status : Status,
        CreateDate :CreateDate
    }
    booksModel.create( BookInfoBody , (err , data) => {
        if(err){
            res.status(400).json({msg : "Books Create Failed" , err : err})
        }else{
            res.status(200).json({msg : "Book Create Success" , data : data})
        }
    })
}


exports.GetYourBooks = (req , res ) => {
    let username = req.headers.username
    booksModel.find({username : username } , (err , data) => {
        if(err){
            res.status(400).json({msg : "Booklist Not Found" , data : err})
        }else{
            res.status(200).json({msg : " Booklist Founded" , data : data})
        }
    })
}

exports.updateBooklist = (req , res) => {
    const {Title , Description , _id} = req.body
    let UpdateDate = Date.now()

    updateBody = {
        Title : Title,
        Description : Description ,
        UpdateDate : UpdateDate
    }

    booksModel.updateOne({_id : _id}, {$set : updateBody} , (err , data) => {
        if(err){
            res.status(400).json({msg : 'update failed' , data : err})
        }else{
            res.status(200).json({msg : "update Success" , data : data})
        }
    })
}

exports.removeBooklist = (req , res) => {
    const {_id} = req.body
    booksModel.remove({_id : _id},(err , data) => {
        if(err){
            res.status(400).json({msg : 'remove Failed' , data : err})
        }else{
            res.status(200).json({msg : "remove Success" , data : data})
        }
    })
}


exports.findBooksByStatus = (req , res) => {
    const username = req.headers.username
    const {Status} = req.body
    booksModel.find({Status , username} , (err , data) => {
        if(err){
            res.status(400).json({msg : "Not Found" , data : err})
        }else{
            res.status(400).json({msg : " Found Data " , data : data})
        }
    })
}