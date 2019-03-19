const studentModel = require('./../models/student');
const userModel = require('./../models/users');
const validator = require('validator');
const bcrypt = require('bcrypt');

module.exports = {
  student: () => {
      return studentModel.find({})
  },

  students: () => {
      return studentModel.find({})
  },

  addStudent: async function({ userInput }, req) {
    const existingUser = await studentModel.findOne({ email: userInput.email });
    if (existingUser) {
      throw new Error('User exists already!');
    }
    const stud = new studentModel({
      name: userInput.name,
      email: userInput.email,
    });
    const createdUser = await stud.save();
    const UserId = createdUser._id.toString();
    return { ...createdUser._doc, UserId };
  },

  deleteStudent: async ({ userInput }, req)=> {
    const existingUser = await studentModel.findOne({ email: userInput.email });
    if (!existingUser) {
      throw new Error('User Does Not Exist!');
    }
    return existingUser.delete(userInput.email)
  },

  createUser: async ({userInput}, req) => {
    let errors =[];
    if(validator.isEmpty(userInput.name)){
      errors.push({message: 'Invalid Name'});
    }
    if(!validator.isEmail(userInput.email)){
      errors.push({message: 'Invalid Email'});
    }
    if(validator.isEmpty(userInput.password) ||
      validator.isLength(userInput.password, { min: 8})){
      errors.push({message: 'Password too short'});
    }
    if(errors.length>0){
      throw new Error('Invalid Input');
    }
    const existingUser = await userModel.findOne({ email: userInput.email });
    if (existingUser) {
      throw new Error('User exists already!');
    }
    const hashedPw = await bcrypt.hash(userInput.password,12);
    const user = new userModel({
      name: userInput.name,
      email: userInput.email,
      password: hashedPw
    });
    const createdUser = await user.save();
    const UserId = createdUser._id.toString();
    return { ...createdUser._doc, UserId };
  }
};
