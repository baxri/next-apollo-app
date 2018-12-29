const axios = require('axios');
const { service_url } = require('../config');

const typeDef = `
type Token {
    token_type: String
    expires_in: String
    access_token: String
    refresh_token: String
}

extend type Query {
    token(client_id: Int!, grant_type: String!, username: String!, password: String!, client_secret: String!): Token
}
`;

const resolvers = {
    Query: {
        token: async (parent, args, { token }) => {
            const { data } = await axios.post(`${service_url}oauth/token`, args);
            return data;
        },
    }
};

module.exports = {
    Token: typeDef,
    TokenResolvers: resolvers
}