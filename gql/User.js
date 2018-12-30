import gql from "graphql-tag";

export const TOKEN = gql`
      mutation Token(
        $client_id: Int!, 
        $grant_type: String!,
        $username:String!,
        $password: String!,
        $client_secret: String!
    ) {
        token(
            client_id: $client_id
            grant_type: $grant_type
            username: $username
            password: $password
            client_secret: $client_secret
        ) {
            id
            first_name
            last_name
            email
            status
            access_token
        }
    }
`;

export const USER = gql`
   query{
        user {
            id
            first_name
            last_name
            email
            status
        }
    }
`;
