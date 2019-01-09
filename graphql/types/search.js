const { get, post, protected } = require('../axios');

const typeDef = `
    type Search {
        id: Int
        title: String
        body: String      
    }

    extend type Query {
        search(search: String): [Search]
    }


`;

const resolvers = {
    Query: {
        search: async (parent, args, { token }) => {
            return [
                {
                    id: 1,
                    title: "sdfsd",
                    body: 'sdfdsf sd sf sd fsd',
                },
                {
                    id: 2,
                    title: "sdfsdfsdf",
                    body: 'd ds fsd fd sdfsd  hvili',
                },
                {
                    id: 3,
                    title: "fsdsdfsdfsdf",
                    body: 'sd fsdf sdfsd fsd f hvili',
                }
            ]
        },
    }
};

module.exports = {
    Search: typeDef,
    SearchResolvers: resolvers
}