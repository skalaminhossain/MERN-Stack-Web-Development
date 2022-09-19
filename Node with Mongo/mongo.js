const MongoClient = require('mongodb').MongoClient

const URL = "mongodb+srv://skalaminhossain:skalamin@cluster0.edfqrta.mongodb.net/School?retryWrites=true&w=majority"

const config = {useUnifiedTopology : true};

MongoClient.connect(URL , config , (err , mongoinfo) => {
    if(err){
        console.log("Connection error");
    }else{
        console.log("Connection Success");
        // insertData(mongoinfo)
        // deleteOneData(mongoinfo)
        // deleteManyData(mongoinfo)
        // findOneDataWithoutCondition(mongoinfo)
        // findOneDatawithCondition(mongoinfo)
        // findAllData(mongoinfo)
        // findDataByProjection(mongoinfo)
        // findDataQuery(mongoinfo)
        // findDataLimit(mongoinfo)
        // findDataBySort(mongoinfo)
        updateData(mongoinfo)
        
    }
})


//insert Many Data

const insertData = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    const data = [
        {name : 'alamin' , age : 20 , depertmnet : "Electrical"},
        {name : 'anamul' , age : 21 , depertmnet : "Civil"},
        {name : 'nazmul' , age : 19 , depertmnet : "computer"},
        {name : 'bakibillah' , age : 22 , depertmnet : "Electrical"},
    ]

    myCollection.insertMany(data , (err) => {
        if(err){
            console.log("Insert Failed");
        }else{
            console.log("Insert Success")
        }
    })
}

//delete one spesefic data

const deleteOneData = (mongoinfo) => {
    const dataBase = mongoinfo.db("School")
    const myCollection = dataBase.collection('Students')

    const data = {name : 'nazmul'}

    myCollection.deleteOne(data , (err) => {
        if(err){
            console.log("Data Deleted Failed");
        }else{
            console.log("Data Deleted");
        }
    })
}

//delete Many data

const deleteManyData = (mongoinfo) => {
    const dataBase = mongoinfo.db("School")
    const myCollection = dataBase.collection('Students')

    // const data = [{name : "alamin"} , {name : "bakibillah"}]

    myCollection.deleteMany((err , result) => {
        if(err){
            console.log("data deleted failed");
        }else{
            console.log(result.deletedCount);
        }
    })
}

//find one data without condition 
const findOneDataWithoutCondition = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')
    
    myCollection.findOne((err , result) => {
        console.log(result);
    })
}


// find one data with condition
const findOneDatawithCondition = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    const findData = {name : "nazmul"}

    myCollection.findOne(findData , (err , result) => {
        console.log(result);
    })
}

//find all data 
const findAllData = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    myCollection.find().toArray((err , result) => {
        console.log(result);
    })
}

// find data by projection

const findDataByProjection = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    const itemObj = {}
    const itemProjection = {projection : {age : "20"}}

    myCollection.find(itemObj , itemProjection).toArray((err , result) => {
        console.log(result);
    })
}

//find data with query param

const findDataQuery = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    const query = {age : 20}

    myCollection.find(query).toArray((err , result) => {
        console.log(result);
    })
}

//data find Limit

const findDataLimit = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')


    myCollection.find().limit(5).toArray((err , result) => {
        console.log(result);
    })
}


const findDataBySort = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    const sortData = {age:-1}
    myCollection.find().sort(sortData).toArray((err , result) => {
        console.log(result);
    })
}

const updateData = (mongoinfo) => {
    const dataBase = mongoinfo.db('School')
    const myCollection = dataBase.collection('Students')

    const dataquery = {age : 20 }
    const updateQuery = {$set : {age : 21}}

    myCollection.updateOne(dataquery , updateQuery , (err , result) => {
        console.log(result);
    })
}

