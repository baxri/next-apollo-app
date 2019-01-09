const typeDef = `
  type Author {
    firstName: String
    lastName: String
    books: [Book]
  }

  extend type Query {
    author(id: Int!): Author
  }
`;

const resolvers = {
    Author: {
        books: () => {
            return [
                { title: "oko" },
                { title: "asdasd" },
                { title: "dgdfg" },
                { title: "dfgdfg" },
                { title: "nmbmbnmbm" }
            ]
        },
    },
    Query: {
        author: () => {
            return {
                firstName: "George",
                lastName: "Bibilashvili",
            }
        },
    },
};


module.exports = {
    Author: typeDef,
    AuthorResolvers: resolvers,
}
