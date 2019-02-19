
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    

    // db.collection('Todos').insertOne({
    //     text:'Something about today',
    //     completed: false 
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //Insert New Doc into User(name,age,location)

    // db.collection('Users').insertOne({
    //     name:'Bilal',
    //     age: 21,
    //     location:'Kuala Lumpur'
    // }, (err,results)=>{
    //     if(err){
    //         return console.log('Unable to insert into Users',err)
    //     }
    //     console.log(JSON.stringify(results.ops[0]._id.getTimestamp(),undefined,2));
    // })

    db.close();
});
