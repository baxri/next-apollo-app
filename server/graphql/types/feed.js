
const typeDef = `
    type Feed {
        id: Int  
        title: String
        description: String
        published: Int
    }

    extend type Query {
        feeds(offset: Int, limit: Int): [Feed]
    }
`;

const resolvers = {
    Query: {
        feeds: async (parent, args, { token }) => {

            return [
                {
                    id: 1,
                    title: "aasad",
                    description: "asdasdaxd",
                    published: 1,
                },
                {
                    id: 2,
                    title: "aasad",
                    description: "asdassfsdfdaxd",
                    published: 1,
                },
                {
                    id: 3,
                    title: "aasad",
                    description: "asdasdfsddaxd",
                    published: 0,
                },
                {
                    id: 4,
                    title: "aasad",
                    description: "adddaxd",
                    published: 1,
                },
                {
                    id: 5,
                    title: "aasasfdd",
                    description: "asdadsdfsdfdfsdaxd",
                    published: 0,
                }
            ]
        },
    }
};

module.exports = {
    Feed: typeDef,
    FeedResolvers: resolvers
}
