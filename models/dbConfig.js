const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://root:root@cluster0.dknbo.mongodb.net/node-api",
    // "mongodb://localhost:27017/node-api",
    {useNewUrlParser: true, UseUnifiedTopology: true},
    (err) =>{
        if(!err) console.log("connected to db!!");
        else console.log("connection error: "+ err)
    }
)