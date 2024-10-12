const LOCAL="http://localhost:3000/"
const DEPLOY_URL="https://growthx-assignment-oyx1.onrender.com"

async function verifyAdmin(req,res,next){
    const getAllAdmins=await fetch(`${DEPLOY_URL}/admins`);
    const adminsList=await getAllAdmins.json()
    const data=adminsList.adminsData
    for(let index=0;index<data.length;index++){
        if(data[index]==req.body.userEmail){
            return res.status(400).send({
                success:false,
                msg:"Admin Cannot Upload Assignment",
                data
            })
        }
    }
    return next()
}

module.exports={verifyAdmin}