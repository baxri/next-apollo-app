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
            middle_name

            prefix
            suffix
            initials
            birthday

            title
            signature

            home_phone
            work_phone
            ext
            direct_phone
            mobile
            fax

            twitter
            facebook
            youtube
            google
            instagram
            snapchat
            linkedin

            email
            status
            access_token
            profile_url
        }
    }
`;

export const LOGOUT = gql`
    mutation Logout($id: Int!){
         logout(id: $id) {
            id
            first_name
            last_name
            middle_name

            prefix
            suffix
            initials
            birthday

            title
            signature

            home_phone
            work_phone
            ext
            direct_phone
            mobile
            fax

            twitter
            facebook
            youtube
            google
            instagram
            snapchat
            linkedin

            email
            status
            access_token
            profile_url
        }
    }
`;

export const USER = gql`
   query{
        user {
            id
            first_name
            last_name
            middle_name

            prefix
            suffix
            initials
            birthday

            title
            signature

            home_phone
            work_phone
            ext
            direct_phone
            mobile
            fax

            twitter
            facebook
            youtube
            google
            instagram
            snapchat
            linkedin

            email
            status
            access_token
            profile_url
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser($id: Int!){
            updateUser(id: $id) {
                id
            first_name
            last_name
            middle_name

            prefix
            suffix
            initials
            birthday

            title
            signature

            home_phone
            work_phone
            ext
            direct_phone
            mobile
            fax

            twitter
            facebook
            youtube
            google
            instagram
            snapchat
            linkedin

            email
            status
            access_token
            profile_url
        }
    }
`;
