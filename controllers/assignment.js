const assignmentModel=require("../model/assignmentModel")
const userModel = require("../model/userModel")
const {VerifyEmailAndUserId}=require("../common/verifyemailanduserid")

//Get Assignment in which admin is tagged
const getAssignmentOfAdmin=async(req,res)=>{
    const verifyAdminExists=await VerifyEmailAndUserId(req.headers.userid,req.headers.useremail)
    if(!verifyAdminExists){
        return res.status(400).send({
            success:false,
            msg:"Admin Dont Exists"
        })
    }
    try{
        const getAllAssignmentsTagged=await assignmentModel.find({adminEmail:req.headers.useremail})
        return res.status(200).send({
            success:true,
            assignmentslist:getAllAssignmentsTagged
        })
    }catch(err){
        return res.status(500).send({
            success:false
        })
    }
}

//Accept Assignment in which admin is tagged
const acceptAssignment=async(req,res)=>{
    const id=req.params.id
    const adminEmail=req.headers.useremail
    try{
        const verifyAdminExists=await VerifyEmailAndUserId(req.headers.userid,req.headers.useremail)
        if(!verifyAdminExists){
            return res.status(400).send({
                success:false,
                msg:"Admin Dont Exists"
            })
        }
        const assignmentData=await assignmentModel.find({adminEmail})
        if(assignmentData){
            await assignmentModel.findOneAndUpdate({assignmentId:id},{$set:{verdict:'accepted'}},{new:true})
            return res.status(200).send({
                success:true,
                msg:"Data Updated"
            })
        }
        else{
            return res.status(400).send({
                success:false,
                msg:"Admin does not have any assignment"
            })
        }
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:"Some Error Occurred"
        })
    }
}

//Reject Assignment in which admin is tagged
const rejectAssignment=async(req,res)=>{
    const id=req.params.id
    const adminEmail=req.headers.useremail
    try{
        const verifyAdminExists=await VerifyEmailAndUserId(req.headers.userid,req.headers.useremail)
        if(!verifyAdminExists){
            return res.status(400).send({
                success:false,
                msg:"Admin Dont Exists"
            })
        }
        const assignmentData=await assignmentModel.find({adminEmail})
        if(assignmentData){
            await assignmentModel.findOneAndUpdate({assignmentId:id},{$set:{verdict:'not-accepted'}},{new:true})
            return res.status(200).send({
                success:true,
                msg:"Data Updated"
            })
        }
        else{
            return res.status(400).send({
                success:false,
                msg:"Admin does not have any assignment"
            })
        }
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:"Some Error Occurred"
        })
    }
}

module.exports={getAssignmentOfAdmin,acceptAssignment,rejectAssignment}