const { get, post, protected } = require('../axios');

const typeDef = `
    type Company {
        id: Int
        account_number_prefix: String
        account_number_start: Int
        account_number_last: Int
        max_users: Int

        name: String
        address1: String
        address2: String
        city: String
        state: String
        postal: String
        postal4: String
        country: String

        phone: String
        fax: String
        email: String
        website: String

        domain: String
        domain_tld: String

        twitter: String
        facebook: String
        youtube: String
        google: String
        instagram: String
        snapchat: String
        linkedin: String
    }

    extend type Query {
        company: Company
    }
`;

const resolvers = {
    Query: {
        company: async (parent, args, { token }) => {
            return await get('api/company', token);
        },
    },
};

module.exports = {
    Company: typeDef,
    CompanyResolvers: resolvers
}