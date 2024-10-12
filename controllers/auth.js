const zod = require("zod")
const userModel = require("../model/userModel")
const assignmentModel=require("../model/assignmentModel")
const bcrypt = require("bcryptjs")

// Register a new User/Admin
const userRegister = async (req, res) => {
    try {
        const userdatavalidate = zod.object({
            userEmail: zod.string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string"
            }).email(),
            username: zod.string({
                required_error: "Username is required",
                invalid_type_error: "Username must be a string"
            }),
            password: zod.string({
                required_error: "Password is required",
                invalid_type_error: "Password must be a string"
            })
        })
        const validate = userdatavalidate.safeParse(req.body)
        if (validate.success) {
            const{userEmail,username,password,admin}=req.body
            const existingUser = await userModel.findOne({ userEmail })
            if (existingUser) {
                return res.status(400).send({
                    success: false,
                    message: "User Already Exists"
                })
            }
            const hashedPassword=await bcrypt.hash(password,10)
            const user=await userModel({userEmail,username,password:hashedPassword,admin:admin})
            await user.save()
            return res.status(200).send({
                success:true,
                message:"User Registered Successfully"
            })
        }
        else {
            return res.status(400).send({
                success: false,
                message: "Enter Correct Credentials",
                error:validate.error.issues[0].message
            })
        }
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "Some Error Occurred",
            err
        })
    }
}

// User/Admin login
const userLogin = async (req, res) => {
    try {
        const userdatavalidate = zod.object({
            userEmail: zod.string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string"
            }).email(),
            password: zod.string({
                required_error: "Password is required",
                invalid_type_error: "Password must be a string"
            }),
        })
        const validate = userdatavalidate.safeParse(req.body)
        if (validate.success) {
            const { userEmail, password } = req.body
            const existingUser = await userModel.findOne({ userEmail })
            if (!existingUser) {
                return res.status(400).send({
                    success: false,
                    message: "User Not Registered"
                })
            }
            const isMatch = await bcrypt.compare(password, existingUser.password)
            if(isMatch){        
                return res.status(200).send({
                    success:true,
                    message:"User Login Successful",
                    existingUser
                })
            }
            else{
                return res.status(400).send({
                    success:false,
                    message:"Incorrect Email or Password"
                })
            }
        }
        else {
            return res.status(400).send({
                success: false,
                message: "Enter Correct Credentials",
                error:validate.error.issues[0].message
            })
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Some Error Occurred",
            err
        })
    }
}

// Fetch all Admins
const getAllAdmins=async(req,res)=>{
    try{
        const admins=await userModel.find({admin:true})
        const adminsData=admins.map((user)=>{
            return {
                username:user.username,
                userEmail:user.userEmail
            }
        })
        return res.status(200).send({
            adminsData
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            msg:"Some error encountered"
        })
    }
}

// Upload an Assignment
const uploadAssignment=async(req,res)=>{
    try{
        const assignmentdatavalidate = zod.object({
            userEmail: zod.string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string"
            }).email(),
            adminEmail: zod.string({
                required_error: "Email is required",
                invalid_type_error: "Email must be a string"
            }).email(),
            task: zod.string({
                required_error: "task is required",
                invalid_type_error: "task must be a string"
            })
        })
        const validate = assignmentdatavalidate.safeParse(req.body)
        if(validate.success){
            const {userEmail,task,adminEmail}=req.body
            const findAdminEmailInDb=await userModel.find({userEmail:adminEmail})
            if(!findAdminEmailInDb && !findAdminEmailInDb.admin){
                return res.status(400).send({
                    success: false,
                    message: "Admin Dont Exists"
                })
            }
            const assignmentM=await assignmentModel({userEmail,task,adminEmail})
            await assignmentM.save()
            return res.status(200).send({
                success:true,
                msg:"Successfully uploaded assignment",
                assignmentM
            })
        }
        else {
            return res.status(400).send({
                success: false,
                message: "Validation failed"
            })
        }
    } catch(err){
        return res.status(500).send({
            success:false,
            message:"Error occurred while uploading assignmnent",
            err
        })
    }
}

module.exports={userRegister,userLogin,getAllAdmins,uploadAssignment}