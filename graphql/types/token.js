const { post } = require('../axios');

const typeDef = `
    type Token {
        token_type: String
        expires_in: String
        access_token: String
        refresh_token: String
    }

    extend type Mutation {
        token(client_id: Int!, grant_type: String!, username: String!, password: String!, client_secret: String!): Token
    }
`;

const resolvers = {
    Mutation: {
        token: async (parent, args, { token }) => {
            return await post('oauth/token', args);
        },
    }
};

module.exports = {
    Token: typeDef,
    TokenResolvers: resolvers
}