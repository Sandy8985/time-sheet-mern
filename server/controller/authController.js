const User = require("../models/authModel")
const createtoken = require("../utilities/token")

//login user 
const login = async (req,res) =>{

    const{email,password}=req.body
    try {
        const user = await User.loginn( email, password)

        //token
        const Token = createtoken(user._id)

        res.status(201).send({email,password,Token})

    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

//signup user
const signup = async (req,res) =>{

    const {name, emp_id, email, password} = req.body
    try {
        const user = await User.signupp(name, emp_id, email, password)

        //token
        const Token = createtoken(user._id)

        res.status(201).send({name,emp_id,email,password,Token})

    } catch (err) {
        res.status(400).json({error : err.message})
    }
}





// ----------------------------------------------------------------------



//getting all data
const profileget = async (req, res) => {
    try {
      const profiledata = await User.find();
      res.status(200).send(profiledata);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // getting single data 
  const profilegetsingle = async(req,res)=>{
      try {
          const id = req.params.id
          const profiledata = await User.findById({_id:id});
          res.status(200).send(profiledata);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
  }
  
  //create record
  const createrecord = async(req,res) =>{
      try {
          const newprofile = new User(req.body)
          const Profile = await newprofile.save()
          res.status(200).json(Profile)
      } catch (err) {
          res.status(400).json({ error: err.message });
      }
  }
  
  //update data
  const profilepatch = async(req,res) =>{
      try {
          const id = req.params.id
          const updatedata = await User.findByIdAndUpdate({_id : id},req.body,{new : true})
          res.status(200).json(updatedata)
      } catch (err) {
          res.status(400).json({ error: err.message });
      }
  }
  module.exports = { profileget , profilegetsingle , createrecord , profilepatch ,login,signup};
