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

const addResumenMutation = gql`
mutation AddResumen(
        $name: String!,
        $asignatura: String!, 
        $tema: String!,
        $descripcion: String!, 
        $content: String!, 
        $userId: ID!) {
    addResumen(name: $name, content: $content, userId: $userId, asignatura: $asignatura, tema: $tema, descripcion: $descripcion) {
        name
        content
        userId
    }
}
`;

export { addUserMutation, getUsersQuery, addResumenMutation };
