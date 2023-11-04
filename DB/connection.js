const mongoose = require('mongoose')
const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb atlas connected to pfserver");
}).catch(err=>{
    console.log("mongodb connection failes"+err);
})