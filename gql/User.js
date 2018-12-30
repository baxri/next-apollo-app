import gql from "graphql-tag";

export const USER = gql`
   {
    user {
            first_name
            last_name
            email
            status
        }
    }
`;
