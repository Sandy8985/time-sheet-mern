const adminModel = require("../models/adminAuth")
const createtoken = require("../utilities/token")

//signup
const adminsignup = async (req,res) =>{

    const {name, emp_id, email, password} = req.body
    try {
        const user = await adminModel.signupp(name, emp_id, email, password)

        //token
        const Token = createtoken(user._id)

        res.status(201).send({name,emp_id,email,password,Token})

    } catch (err) {
        res.status(400).json({error : err.message})
    }
    // res.status(200).send("signup")
}

//login user 
const adminlogin = async (req,res) =>{

    const{email,password}=req.body
    try {
        const user = await adminModel.loginn( email, password)

        //token
        const Token = createtoken(user._id)

        res.status(201).send({email,password,Token})

    } catch (err) {
        res.status(400).json({error : err.message})
    }
    // res.status(200).send("login")
}

module.exports = {adminlogin,adminsignup}