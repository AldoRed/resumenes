import { gql } from "@apollo/client";

const addUserMutation = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        username
        email
        password
    }
}
`;

const getUsersQuery = gql`
{
  users {
    id
    username
    email
  }
}`;


export {addUserMutation, getUsersQuery};