//Configure Mongodb

const { MongoClient } = require('mongodb')
const URL= "mongodb://localhost:27017"
const dbInfo = new MongoClient(URL)

// Create Cricketers
const creatCricketers = async() => {
    try {
        const dababase = dbInfo.db("Cricketers")
        const cricketersInfo = dababase.collection('cricketerInformation')

        const cricketers = [
            {name : "Mustafizur Rahman" , age : 27 , role : 'Bowler' , bowlingStyle : 'Left Arm Fast'},
            {name : "Sakib Al Hasan" , age : 35 , role : 'All-rounder' , bowlingStyle : "Left Arm Orthodox"},
            {name : "Afif Hossain" , age : 23 , role : "All-rounder" , battingStyle : "Left Handed"},
            {name : "Liton Kumar Das" , age : 26 , role : "Batter" , battingStyle :"Right Handed"},
            {name : "Sabbir Hossain" , age : 27 , role : "Batter" , battingStyle : "Right Handed"}
        ]

        const result = await cricketersInfo.insertMany(cricketers)
        console.log("Cricketer SuccessFully Created" , result , result.insertedCount);

    }catch (err){
        console.log(err);
    }
}

// Real Cricketer Information

const readCricketers = async() => {
    try {
        const dababase = dbInfo.db("Cricketers")
        const cricketersInfo = dababase.collection('cricketerInformation')
    
        const query = {}
        const finder = await cricketersInfo.find(query).toArray()
        console.log(finder);
    }catch (err){
        console.log(err);
    }
   
}

//Update Cricketer Information

const updateCricketersInfo = async() => {
    try {
        const dababase = dbInfo.db("Cricketers")
        const cricketersInfo = dababase.collection('cricketerInformation')

        const queryRole = {role : "All-rounder"}
        const updateRoleQuery = {$set : {role : "Batter"}}

        const result = await cricketersInfo.updateMany(queryRole , updateRoleQuery)
        console.log("Cricketer Information Successfuly Updateed ,  " ,"updated data"  + " " +  result.modifiedCount);
    }catch (err) {
        console.log(err);
    }
}

const deleteCricketers = async() => {
    try {
        const dababase = dbInfo.db("Cricketers")
        const cricketersInfo = dababase.collection('cricketerInformation')

        const deleteQuery = {}
        const result = await cricketersInfo.deleteMany(deleteQuery)
        console.log("Cricketers SuccessFully Deleted" ,  result.deletedCount);
    }catch (err) {
        console.log(err);
    }
}

//CRUD Functions

creatCricketers()
// readCricketers()
// updateCricketersInfo()
// deleteCricketers()