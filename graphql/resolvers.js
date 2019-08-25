const studentModel = require("./../models/student");
const userModel = require("./../models/users");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { JWT_SECRET } = require("../config/keys");

module.exports = {
  student: ({name}, {req, res}) => {
    if (!req.userId) {
      throw new Error("Unauthenticated");
    }
    return studentModel.findOne({name: name});
  },

  students: (args, {req}) => {
    if (!req.userId) {
      throw new Error("Unauthenticated");
    }
    return studentModel.find({});
  },

  addStudent: async function({ userInput }, {req}) {
    if (!req.userId) {
      throw new Error("Unauthenticated");
    }
    const existingUser = await studentModel.findOne({ email: userInput.email });
    if (existingUser) {
      throw new Error("User exists already!");
    }
    const stud = new studentModel({
      name: userInput.name,
      email: userInput.email
    });
    const createdUser = await stud.save();
    const UserId = createdUser._id.toString();
    return { ...createdUser._doc, UserId };
  },

  deleteStudent: async ({ userInput }, {req}) => {
    if (!req.userId) {
      throw new Error("Unauthenticated");
    }
    const existingUser = await studentModel.findOne({ email: userInput.email });
    if (!existingUser) {
      throw new Error("User Does Not Exist!");
    }
    return existingUser.delete(userInput.email);
  },

  register: async ({ userInput }) => {
    let errors = [];
    if (validator.isEmpty(userInput.fname)) {
      errors.push({ message: "Invalid First Name" });
    }
    if (validator.isEmpty(userInput.lname)) {
      errors.push({ message: "Invalid Last Name" });
    }
    if (!validator.isEmail(userInput.email)) {
      errors.push({ message: "Invalid Email" });
    }
    if (
      validator.isEmpty(userInput.password) ||
      !validator.isLength(userInput.password, { min: 5 })
    ) {
      errors.push({ message: "Password too short" });
    }
    if (errors.length > 0) {
      throw new Error(errors.map(item => item.message));
    }
    const existingUser = await userModel.findOne({ email: userInput.email });
    if (existingUser) {
      throw new Error("User exists already!");
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new userModel({
      firstname: userInput.fname,
      lastname: userInput.lname,
      email: userInput.email,
      password: hashedPw
    });
    const createdUser = await user.save();
    const UserId = createdUser._id.toString();
    return { ...createdUser._doc, UserId };
  },

  login: async ({ email, password }, {req, res, next}) => {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      throw new Error("No user with that email");
    }
    const valid = await bcrypt.compare(password, existingUser.password);
    if (!valid) {
      res.status(401).send()
      return next()
    }
    const accessToken = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "15min" }
    );
    res.cookie('ssid', accessToken,{
      maxAge: 1000*60*60*24*7,
      httpOnly: true
    })
    return {
      userId: existingUser.id,
      accessToken
    };
  },

  logout: ({email},{res})=>{
    const existingUser = userModel.findOne({ email: email });
    return{
      userId: existingUser.userId
    }
  }
};
