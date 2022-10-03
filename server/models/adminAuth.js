const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emp_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//statics signup method
adminSchema.statics.signupp = async function (name, emp_id, email, password) {
  // validation
  if (!name || !emp_id || !email || !password) {
    throw Error("Please fill all the fields!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!");
  }
  if(!validator.isStrongPassword(password)){
    throw Error("Please choose a strong password")
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already exists");
  }

  // password hashing
  const hash = await bcrypt.hash(password, 12);

  const createuser = await this.create({ name, emp_id, email, password: hash });

  return createuser;
};

//static login method
adminSchema.statics.loginn = async function(email, password){
  // validation
  if (!email || !password) {
    throw Error("Please fill all the fields!");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password,user.password)
  if(!match){
    throw Error("Incorrect password");
  }

  return user
}

const adminModel = new mongoose.model("Employeer-Admin",adminSchema)

module.exports = adminModel