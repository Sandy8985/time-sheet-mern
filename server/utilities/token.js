const jwt = require("jsonwebtoken")

const createtoken = (_id)=>{
    return jwt.sign({_id},`${process.env.TOKEN_SECRET}`,{expiresIn:'5d'})
}

module.exports = createtoken