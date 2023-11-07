//to load .env file
require('dotenv').config()

//create express server
const express=require('express')

//import cors
const cors = require('cors')

//import route
const router=require('./Routes/routes')
require('./DB/connection')

//to create express server
const pfServer=express()

//use cors
pfServer.use(cors())

//parse json data using server app
pfServer.use(express.json())

//use router
pfServer.use(router)

//customise port for server app
const PORT = 4000 || process.env.PORT

//to run server application
pfServer.listen(PORT,()=>{
    console.log(`project fair server started at port : ${PORT}`);
})

//resolve request
pfServer.get('/',(req,res)=>{
    res.send(`<h1>project fair started at port 4000</h1>`)
})
