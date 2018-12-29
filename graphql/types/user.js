const axios = require('axios');
const { service_url } = require('../config');

const typeDef = `
type User {
    firstName: String
    lastName: String
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

            console.log(token)

            return {
                "firstName": "George",
                "lastName": "Bibilashvili",
                "email": "giorgi.bibilashvili89@gmail.com",
                "status": "Active",
            };
        },
    }
};

module.exports = {
    User: typeDef,
    UserResolvers: resolvers
}