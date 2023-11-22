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

//getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.getAllUserProjects)

//gethomeproject
router.get('/home/projects',projectController.getHomeProjects)

//getallprojects
router.get('/projects/all',jwtMiddleware,projectController.getAllProjects)
 
//edit project
router.put('/project/edit/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

//deleteproject
router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteProject)

//updateprofile
router.put('/user/update',jwtMiddleware,multerConfig.single('profileImage'),userController.updateProfile)

module.exports=router