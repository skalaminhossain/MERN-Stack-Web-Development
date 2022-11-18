// const PlayersModel = require('../models/PlayersModel')
const PlayersModel = require('../models/models.js')
const insertData = (req , res) => {
    let reqBody = req.body
    PlayersModel.create(reqBody , (err , data) => {
        if(err){
            res.status(400).json({msg : "Data insert Faild"})
        }else{
            res.status(201).json({msg : "Data inserted " , data : data})
        }
    })
}

module.exports = insertData

//Read Players
exports.ReadPlayers = (req , res) => {
    let query = {}
    let projection = "name roll class remarks"
    PlayersModel.find(query,projection, (err , data) => {
        if(err) {
            res.status(400).json({msg : "Data find Failed"})
        }else{
            res.status(200).json({msg : "Dada finded" , data : data})
        }
    })
}