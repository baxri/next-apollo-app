import gql from "graphql-tag";

export const LOGIN = gql`
    mutation Login($email:String!,$password:String!){
        login(email:$email, password:$password){
            token
        }
    }
`;

export const PROFILE = gql`
   query User($id:ID!){
        User(id: $id) {
            id
            firstName
            lastName
            email
            avatar
        }
    }
`;

export const POSTS = gql`
    query AllPosts($count: Int) {
        allPosts(count: $count) {
            id
            title
            body
            createdAt
        }
    }
`;