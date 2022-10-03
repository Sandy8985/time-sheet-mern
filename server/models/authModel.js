const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const userschema = mongoose.Schema(
  {
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
    phone: {
      type: Number,
    },
    dept: {
      type: String,
    },
    year: {
      type: Number,
    },
    role: {
      type: String,
    },
    dob: {
      type: String,
    },
    experience: {
      type: Number,
    },
    address: {
      type: String,
    },
    location: {
      type: String,
    },
    emgcontact: {
      type: Number,
    },
  },
  { timestamps: true },
  { createdin: -1 }
);

//statics signup method
userschema.statics.signupp = async function (name, emp_id, email, password) {
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
userschema.statics.loginn = async function(email, password){
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

const user = new mongoose.model("Employee", userschema);

module.exports = user;
