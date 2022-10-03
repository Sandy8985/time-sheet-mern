const jwt = require("jsonwebtoken")
const adminModel =  require("../models/adminAuth")

const requireAdmin = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(400).json({error : "Authorization token required"})
  }

  const token = authorization.split(' ')[1]

  try {
    const {_id} = jwt.verify(token,process.env.TOKEN_SECRET)

    req.adminModel = await adminModel.findOne({_id}).select('_id')

    next()

  } catch (err) {
    res.status(400).json({error : err.message})
  }
};
module.exports = requireAdmin