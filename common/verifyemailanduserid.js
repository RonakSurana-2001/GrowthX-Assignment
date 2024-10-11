const userModel = require("../model/userModel");

const VerifyEmailAndUserId = async (userid, useremail) => {
    try {
        if (!userid || !useremail) {
            console.log("UserId or UserEmail is missing.");
            return false;  // Return false if either field is empty
        }
        const verify = await userModel.find({ userId: userid, userEmail: useremail, admin: true });
        return verify.length!==0 ? true : false; 
    } catch (error) {
        console.error("Error during verification:", error);
        return false; 
    }
};

module.exports = { VerifyEmailAndUserId };
