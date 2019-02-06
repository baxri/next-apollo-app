import gql from "graphql-tag";

export const FolderFields = gql`
    fragment FolderFields on Folder {
        id
        admin_id
        name
        status
        created_at
        updated_at
    }
`;

export const LIST = gql`
  query Folders($offset: Int, $limit: Int) {
    folders(offset: $offset, limit: $limit) {
           ...FolderFields
        }
    }
    ${FolderFields}
`;

export const SHOW = gql`
  query Folder($id: Int!) {
    folder(id: $id) {
           ...FolderFields
        }
    }
    ${FolderFields}
`;

export const CREATE = gql`
    mutation FolderCreate($admin_id:Int!, $name:String!) {
        folderCreate(admin_id:$admin_id, name: $name) {
            ...FolderFields
        }
    }
    ${FolderFields}
`;

export const UPDATE = gql`
    mutation FolderUpdate($id:Int!, $name:String, $status:Boolean) {
        folderUpdate(id: $id, name: $name, status: $status) {
            ...FolderFields
        }
    }
    ${FolderFields}
`;

export const DELETE = gql`
    mutation FolderDelete($id:Int!) {
        folderDelete(id: $id) {
            ...FolderFields
        }
    }
    ${FolderFields}
`;
