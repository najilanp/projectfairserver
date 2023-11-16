//import express
const express = require('express')

//import usercontroller js file
const userController =require('../Controllers/usercontroller')

//import projectcontroller js file
const projectController =require('../Controllers/projectcontroller')
//import multer
const multerConfig=require('../Middlewares/multerMiddleware')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

//create router for express app using Router()
const router = new express.Router()

//define different routes for server app
//register
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)

//addproject
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)


module.exports=router