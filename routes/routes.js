const express=require("express")
const router=express.Router()
const { userLogin, userRegister, getAllAdmins ,uploadAssignment} = require("../controllers/auth")
const {getAssignmentOfAdmin,acceptAssignment,rejectAssignment}=require("../controllers/assignment")
const {verifyAdmin}=require("../middleware/verifyAdmin")

router.get("/",(req,res)=>{
    res.send("GrowthX Assignment By Ronak Surana")
})

router.post("/register",userRegister)
router.post("/login",userLogin)
router.get("/admins",getAllAdmins)
router.post("/upload",verifyAdmin,uploadAssignment)

router.get("/assignments",getAssignmentOfAdmin)
router.post("/assignments/:id/accept",acceptAssignment)
router.post("/assignments/:id/reject",rejectAssignment)

module.exports=router