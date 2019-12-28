const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
  name: String!
  email: String!
  password: String!
}

type Student {
   name : String
   email: String
 }

 type loginRes{
  userId: ID!
  accessToken: String!
 }

 type RootQuery {
  student(name: String):  Student!
  students: [Student!]
  login(email: String! , password: String!): loginRes!
  logout(email: String!): loginRes
 }

 type StudUser{
   _id: ID!
   name: String!
   email: String!
 }

 type UserRes{
  _id: ID!
  fname: String!
  lname: String!
  email: String!
  password: String
 }

 input NewInputData {
    name: String!
    email: String!
 }

 input deleteStudentInput {
    email: String!
 }

  input UserDataInput {
    fname: String!
    lname: String!
    email: String!
    password: String!
  }

 type RootMutation {
   addStudent(userInput: NewInputData): StudUser!
   deleteStudent(userInput: deleteStudentInput) : StudUser!
   register(userInput: UserDataInput): UserRes!
 }

 schema {
   query: RootQuery
   mutation: RootMutation
 }
`);
