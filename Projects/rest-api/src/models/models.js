const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    name : String,
    roll : String,
    class : String,
    remarks : String
})

const PlayersModel = mongoose.model('playersinfo' , DataSchema)

module.exports = PlayersModel