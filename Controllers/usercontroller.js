
//import user model
const users = require('../Models/userSchema')

//register
exports.register =  async(req,res)=>{
    console.log("inside register function");
    const {username,email,password}=req.body
    console.log(`username:${username},Email:${email},password:${password}`);


    //check already existing user-findone()

    const existingUser = await users.findOne({email})
        //  res.status(200).json("register request function")


    if(existingUser){
         res.status(401).json('user already exist..please login')
    }else{

        //register user
       const newUser = new users({
           username,email,password,image:"",github:"",linkedin:""
       })
         await newUser.save()
          res.status(200).json(newUser)
     }
}