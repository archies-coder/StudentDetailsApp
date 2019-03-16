const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create
const StudentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = Student = mongoose.model('student', StudentSchema);