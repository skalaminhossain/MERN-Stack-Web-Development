const MongoClient = require('mongodb').MongoClient

const URL = "mongodb+srv://skalaminhossain:skalamin@cluster0.edfqrta.mongodb.net/Cricketer?retryWrites=true&w=majority"

const config = {useUnifiedTopology : true};

MongoClient.connect(URL , config , (err , dataBaseInfo) => {
    if(err){
        console.log("Connection Failed");
    }else{
        console.log("Connection Success");
        // creatCricketer(dataBaseInfo)
        findCricketer(dataBaseInfo)
        // updateCricketer(dataBaseInfo)
        // deleteCricketer(dataBaseInfo)
    }
})


// Create Cricketers Information

const creatCricketer = (dataBaseInfo) => {
    const dataBase = dataBaseInfo.db('Cricketer')
    const cricketerCollection = dataBase.collection('CricketerInfo')

    const cricketer = [
        {name : "Mustafizur Rahman" , age : 27 , role : 'Bowler' , bowlingStyle : 'Left Arm Fast'},
        {name : "Sakib Al Hasan" , age : 35 , role : 'All-rounder' , bowlingStyle : "Left Arm Orthodox"},
        {name : "Afif Hossain" , age : 23 , role : "All-rounder" , battingStyle : "Left Handed"},
        {name : "Liton Kumar Das" , age : 26 , role : "Batter" , battingStyle :"Right Handed"},
        {name : "Sabbir Hossain" , age : 27 , role : "Batter" , battingStyle : "Right Handed"}
    ]
    
    cricketerCollection.insertMany(cricketer , (err) => {
        if(err){
            console.log("Cricketer Insert Failed");
        }else{
            console.log("Cricketer Insert Success");
        }
    })
}

// Read Cricketer Information
//Read all Cricketer Information
const findCricketer = (dataBaseInfo) => {
    const dataBase = dataBaseInfo.db('Cricketer')
    const cricketerCollection = dataBase.collection('CricketerInfo')

    cricketerCollection.find().toArray((err , cricketers) => {
        if(err){
            console.log("find data Failed");
        }else{
            console.log(cricketers);
        }
    })
}

// Update Cricketer Information

const updateCricketer = (dataBaseInfo) => {
    const dataBase = dataBaseInfo.db('Cricketer')
    const cricketerCollection = dataBase.collection('CricketerInfo')

    let queryRole = {role : "All-rounder"}
    let updateRole = {$set : {role : "Batter"}}

    cricketerCollection.updateMany(queryRole , updateRole , (err , result) => {
        if(err){
            console.log("Update Failed");
        }else{
            console.log(result);
        }
    })

}

//  Delete Cricketer Information

const deleteCricketer = (dataBaseInfo) => {
    const dataBase = dataBaseInfo.db('Cricketer')
    const cricketerCollection = dataBase.collection('CricketerInfo')

    cricketerCollection.deleteMany((err) => {
        if(err){
            console.log("Delete All Cricketer Failed");
        }else{
            console.log("Delete Success all cricketer");
        }
    })

}