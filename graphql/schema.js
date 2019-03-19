const { buildSchema } = require('graphql');

// const StudentType = new GraphQLObjectType({
//   name: 'Student',
//   fields: ()=>({
//     id: {type: GraphQLInt},
//     name: {type: GraphQLString},
//     email: {type: GraphQLString},
//     phone: {type: GraphQLString},
//     city: {type: GraphQLString},
//     state: {type: GraphQLString},
//     country: {type: GraphQLString},
//     organization: {type: GraphQLString},
//     jobProfile: {type: GraphQLString},
//     additionalInfo: {type: GraphQLString},
//   })
// });
//
// //RootQuery
// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     student: {
//       type: StudentType,
//       args: {
//         id: GraphQLString,
//       },
//       resolve(parent,args){
//         //    Get Data from DB
//         return students[args.id]
//       }
//     }
//   },
// });
//
// //Mutations
// const Mutation = new GraphQLObjectType({
//   name:'Mutation',
//   fields:{
//     addStudent:{
//       type: StudentType,
//       args: {
//         id: {type: GraphQLString},
//         name: {type: GraphQLString},
//         email: {type: GraphQLString},
//         phone: {type: GraphQLString},
//         city: {type: GraphQLString},
//         state: {type: GraphQLString},
//         country: {type: GraphQLString},
//         organization: {type: GraphQLString},
//         jobProfile: {type: GraphQLString},
//         additionalInfo: {type: GraphQLString},
//       },
//       resolve(parent,args){
//         let student = new studentModel({
//           id:args.id,
//           name:args.name,
//           email:args.email,
//           phone:args.phone,
//           city:args.city,
//           state:args.state,
//           country:args.country,
//           organization:args.organization,
//           jobProfile:args.jobProfile,
//           additionalInfo:args.additionalInfo,
//         });
//         return student.save()
//       }
//     },
//   }
// });
//TypeDefs
// const typeDefs = [`
//
//   type Student {
//     name : String
//   }
//
//   type RootQuery {
//    student:  Student
//   }
//
//   type StudUser{
//     _id: ID!
//     name: String!
//   }
//
//   type RootMutation {
//     addStudent(name: String): Student
//   }
//
//   schema {
//     query: RootQuery
//     mutation: RootMutation
//   }
// `];

/*No Need to add resolver for RootQuery because it is already done in
query: RootQuery bt we need resolvers for subqueries like name and email*/

// const resolvers = {
//   RootQuery: {
//     student() {
//       // return studentModel.find({});
//       return students[0];
//     }
//   },
//   RootMutation: {
//     addStudent: async (args) => {
//       const existStudUser = await studentModel.findOne({name: args.name});
//       if (existStudUser) {
//         throw new Error('User already exists');
//       }
//       //New Entry
//       const stud = new studentModel({
//         name: args.name
//       });
//       //Save new entry to db
//       const newStud = await stud.save();
//       //Return New Created entry
//       return { ...newStud._doc,_id: newStud._id.toString()};
//     }
//   }
// };

module.exports= buildSchema(`

type User {
  name: String!
  email: String!
  password: String!
}

type Student {
   name : String
   email: String
 }

 type RootQuery {
  student:  Student
  students: [Student!]
  user: User
 }

 type StudUser{
   _id: ID!
   name: String!
   email: String!
 }
 
 type UserRes{
  _id: ID!
  name: String!
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
    name: String!
    email: String!
    password: String!
  } 

 type RootMutation {
   addStudent(userInput: NewInputData): StudUser!
   deleteStudent(userInput: deleteStudentInput) : StudUser!
   createUser(userInput: UserDataInput): UserRes!
 }

 schema {
   query: RootQuery
   mutation: RootMutation
 }
`);