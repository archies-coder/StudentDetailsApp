import React, { Component } from "react";
// import {gql} from 'apollo-boost';
// import gql from 'graphql-tag';


// const loginQuery = gql`
//   {
//     login(email:"Auser@a.com",password:"1234878ggasd")
//   }
// `

const addStudentsMutation = {
  mutation: `
    mutation($name: String!, $email: String!){
        addStudent(userInput:{name: $name, email: $email}){
            _id
            name
            email
        }
    }
`
};

const deleteStudentMutation = {
  mutation: `
    mutation($email: String!){
        deleteStudent(userInput: {email: $email}){
            name
        }
    }
`
};


export {addStudentsMutation, deleteStudentMutation };