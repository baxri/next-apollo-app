
const typeDef = `
  type Book {
    title: String
    author: Author
  }

  extend type Query {
    book(id: Int!): Book
  }
`;

const resolvers = {
    Book: {
        author: () => {
            return {
                firstName: "George",
                lastName: "Bibilashvili",
            }
        },
    },
    Query: {
        book: () => {
            return { title: "oko" };
        },
    }
};

module.exports = {
    Book: typeDef,
    BookResolvers: resolvers
}