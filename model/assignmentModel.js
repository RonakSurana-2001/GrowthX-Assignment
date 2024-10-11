const mongoose=require("mongoose")
const { v4: uuidv4 } = require('uuid');

const assignmentSchema=mongoose.Schema({
    assignmentId:{
        type:String,
        required:true,
        default:uuidv4
    },
    userEmail:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now 
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    adminEmail:{
        type:String,
        required:true
    },
    verdict:{
        type:String,
        enum: ['pending', 'accepted', 'not-accepted'],
        default: 'pending'
    }
})

module.exports=mongoose.model('assignment',assignmentSchema)