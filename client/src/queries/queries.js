import {gql} from 'apollo-boost';

const getStudentsQuery = gql`
    {
        students {
            name
        }
    }
`;

const addStudentsMutation = gql`
    mutation($name: String!, $email: String!){
        addStudent(userInput:{name: $name, email: $email}){
            _id
            name
            email
        }
    }
`;

const deleteStudentMutation = gql`
    mutation($email: String!){
        deleteStudent(userInput: {email: $email}){
            name
        }
    }
`;

export { getStudentsQuery,addStudentsMutation, deleteStudentMutation };