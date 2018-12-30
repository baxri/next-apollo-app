const { get, post } = require('../axios');

const typeDef = `
    type User {
        id: Int
        first_name: String
        last_name: String
        email: String
        status: String
        access_token: String
    }

    extend type Query {
        user: User
    }

    extend type Mutation {
        token(client_id: Int!, grant_type: String!, username: String!, password: String!, client_secret: String!): User
        logout(id: Int!): User
    }
`;

const resolvers = {
    Query: {
        user: async (parent, args, { token }) => {
            return await get('api/user', token);
        },
    },
    Mutation: {
        token: async (parent, args, { token }) => {
            const tokenObj = await post('oauth/token', args);
            let t = "Bearer " + tokenObj.access_token;
            let user = await get('api/user', t);
            user.access_token = tokenObj.access_token;
            return user;
        },
        logout: async (parent, { id }, { token }) => {
            return {
                id: id,
                first_name: null,
                last_name: null,
                email: null,
                status: null,
                access_token: null,
            }
        },
    }
};

module.exports = {
    User: typeDef,
    UserResolvers: resolvers
}