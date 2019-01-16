import gql from "graphql-tag";

export const FEEDS = gql`
    query Feeds($offset: Int, $limit: Int) {
        feeds(offset: $offset, limit: $limit) {
            id
            title
            description
            published
        }
    }
`;