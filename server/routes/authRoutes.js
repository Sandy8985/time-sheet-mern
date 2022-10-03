const express = require("express")
const router = express.Router()

//controller functions
const {profileget,profilegetsingle , createrecord , profilepatch, login, signup } = require("../controller/authController")


//login route
router.post("/login",login) 

// signup route
router.post("/signup",signup)

// getting data
router.get("/", profileget);

// getting single data
router.get("/:id", profilegetsingle);

//creating records
router.post("/",createrecord)

//update data
router.patch('/:id',profilepatch)

module.exports = router 