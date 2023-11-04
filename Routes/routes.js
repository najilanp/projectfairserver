//import express
const express = require('express')

//import usercontroller js file
const userController =require('../Controllers/usercontroller')

//create router for express app using Router()
const router = new express.Router()

//define different routes for server app
//register
router.post('/user/register',userController.register)

module.exports=router