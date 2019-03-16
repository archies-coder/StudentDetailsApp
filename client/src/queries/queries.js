import {gql} from 'apollo-boost';


const getStudentsQuery = gql`
    {
        students {
            name
        }
    }
`;

// const addStudentsQuery = gql`
//
// `

export { getStudentsQuery };