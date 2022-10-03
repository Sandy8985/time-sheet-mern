const express = require("express")
const router = express.Router()

const { adminlogin,adminsignup} = require("../controller/adminController")

//login route
router.use("/login",adminlogin)
//signup routes
router.use("/signup",adminsignup)

module.exports = router