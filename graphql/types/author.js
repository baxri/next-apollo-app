// author.js
const typeDef = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
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
