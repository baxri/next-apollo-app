const { get } = require('../axios');

const typeDef = `
type User {
    first_name: String
    last_name: String
    email: String
    status: String
}

extend type Query {
    user: User
}
`;

const resolvers = {
    Query: {
        user: async (parent, args, { token }) => {
            return await get('api/user', token)
        },
    }
};

module.exports = {
    User: typeDef,
    UserResolvers: resolvers
}