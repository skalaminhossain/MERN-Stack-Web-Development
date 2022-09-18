const MongoClint = require('mongodb').MongoClient;

const URL = "mongodb+srv://skalaminhossain:skalamin@cluster0.edfqrta.mongodb.net/School?retryWrites=true&w=majority"

const config = {useUnifiedTopology : true};

MongoClint.connect(URL , config , (err , MyMongoClint) => {
    if(err){
        console.log("Connection Failed");
    }else{
        console.log("Connection success");
        insertData(MyMongoClint)
        // deleteOneItem(MyMongoClint)
        // deleteManyItem(MyMongoClint)
        findOne(MyMongoClint)

    }
})


const insertData = (MyMongoClint) => {

    const dataBase = MyMongoClint.db("School")
    const collection = dataBase.collection('Students')

    let data ={name :"bakililah" , age : 20 , depertment : "Electrical"}
    collection.insertOne(data , (err) => {
        if(err){
            console.log("Insert Failed");
        }else{
            console.log("Insert Success");
        }
    })

}

// delete one item

const deleteOneItem = (MyMongoClint) => {
    const dataBase = MyMongoClint.db("School")
    const collection = dataBase.collection('Students')

    const data = {name : "alamin"}

    collection.deleteOne(data , (err) => {
        if(err){
            console.log("Data Delete Failed");
        }else{
            console.log("Data Delete Success");
        }
    })

    
}

//delete many item

const deleteManyItem = (MyMongoClint) => {
    const dataBase = MyMongoClint.db("School")
    const collection = dataBase.collection('Students')


    collection.deleteMany( (err , obj) => {
        if(err){
            console.log("all data deleted fail");
        }else{
            console.log(obj);
        }
    })

    
}

const findOne = (MyMongoClint) =>{
    const dataBase = MyMongoClint.db("School")
    const collection = dataBase.collection("Student")

    const data = {name : "nazmul"}

    collection.findOne(data , (err , result) => {
        if(err){
            console.log("Data Find Failed");
        }else{
            console.log(result);
        }
    })
}

