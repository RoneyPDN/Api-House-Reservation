const User = require("../models/User")

class SessionController{

    async store(req,res){
        const {email} = req.body.email
        let user = await User.findOne({email})
        if(!user) {
        await User.create({email})
    }
    return res.json({user})
    }




}
module.exports = new SessionController()