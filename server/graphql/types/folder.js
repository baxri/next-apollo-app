const { get, post, protected } = require('../axios');

const typeDef = `
    type Folder {
        id: Int  
        name: String
        status: Int
        created_at: String
        updated_at: String
    }

    extend type Query {
        folder(id: Int): Folder
        folders(offset: Int, limit: Int): [Folder]
    }

    extend type Mutation {
        folderCreate(name: String!): Folder
        folderUpdate(id: Int!, name: String!, status: Int): Folder
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
            let res =  await post('api/filemanager/folders/create', args, token);

            console.log(res)

            return res;
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
