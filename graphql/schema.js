const { merge } = require('lodash');
const { makeExecutableSchema } = require('apollo-server-express');

const { Book, BookResolvers } = require('./types/book');
const { Author, AuthorResolvers } = require('./types/author');

const Query = `
  type Query {
      hello: String
      book(id: Int!): Book
      author(id: Int!): Author
  }
`;


const resolvers = {
    Query: {

    }
};

module.exports = makeExecutableSchema({
    typeDefs: [Query, Author, Book],
    resolvers: merge(resolvers, AuthorResolvers, BookResolvers)
});

