import gql from "graphql-tag";

export const SEARCH = gql`
  query Search($search:String){
      search(search:$search){
        id,
        title,
        body
      }
  }
`;
