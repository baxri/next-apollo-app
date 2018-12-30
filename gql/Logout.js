import gql from "graphql-tag";

export const LOGOUT = gql`
    mutation Logout($id: Int!){
         logout(id: $id) {
            id
            first_name
            last_name
            email
            status
        }
    }
`;
