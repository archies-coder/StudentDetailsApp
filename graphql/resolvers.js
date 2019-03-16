const studentModel = require('./../models/student');

const StudentsId = [];

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
    StudentsId.push(UserId);
    console.log(StudentsId);
    return { ...createdUser._doc, UserId };
  },
  StudentsId
};
