const mongoose=require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username:{
       type:String,
       required:[true,'User name required']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    }
})

const users = mongoose.model('users',userSchema)
module.exports=users