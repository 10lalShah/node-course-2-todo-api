
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c6c0d1c45335acac741f9d4")
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((results)=>{
    //     console.log(results)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c6d242a45335acac74204e3")
    },{
        $set:{
            status: "Its Complicated"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((results)=>{
        console.log(results)
    })


    db.close();
});
