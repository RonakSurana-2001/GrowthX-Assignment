const mongoose=require("mongoose")
const { v4: uuidv4 } = require('uuid');

const userSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true,
        default:uuidv4
    },
    userEmail:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        required:true
    }
})

module.exports=mongoose.model('user',userSchema)