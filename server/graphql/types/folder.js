const { get, post, protected } = require('../axios');

const typeDef = `
    type Folder {ss
        id: Int  
        admin_id: Int
        name: String
        status: Boolean
        created_at: String
        updated_at: String

        
    }

    extend type Query {
        folder(id: Int): Folder
        folders(offset: Int, limit: Int): [Folder]
    }

    extend type Mutation {
        folderCreate(admin_id: Int!, name: String!): Folder
        folderUpdate(id: Int!, name: String, status: Boolean): Folder
        folderDelete(id: Int!): Folder
    }
`;

const resolvers = {
    Query: {
        folder: async (parent, args, { token }) => {
            return await get('api/filemanager/folders/' + args.id + '/show', token);
        },
        folders: async (parent, args, { token }) => {
            return await get('api/filemanager/folders/index', token);
        }
    },

    Mutation: {
        folderCreate: async (parent, args, { token }) => {
            return await post('api/filemanager/folders/create', args, token);
        },
        folderUpdate: async (parent, args, { token }) => {
            return await post('api/filemanager/folders/' + args.id + '/update', args, token);
        },
        folderDelete: async (parent, args, { token }) => {
            return await post('api/filemanager/folders/' + args.id + '/delete', args, token);
        },
    }
};

module.exports = {
    Folder: typeDef,
    FolderResolvers: resolvers
}
