const jwt = require("jsonwebtoken")
const User =  require("../models/authModel")

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(400).json({error : "Authorization token required"})
  }

  const token = authorization.split(' ')[1]

  try {
    const {_id} = jwt.verify(token,process.env.TOKEN_SECRET)

    req.user = await User.findOne({_id}).select('_id')

    next()

  } catch (err) {
    res.status(400).json({error : err.message})
  }
};
module.exports = requireAuth