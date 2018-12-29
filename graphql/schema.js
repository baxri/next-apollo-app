const { merge } = require('lodash');
const { makeExecutableSchema } = require('apollo-server-express');

const { Book, BookResolvers } = require('./types/book');
const { Author, AuthorResolvers } = require('./types/author');

const Query = `
  type Query {
    _empty: String
  }
`;


const resolvers = {

};

module.exports = makeExecutableSchema({
    typeDefs: [Query, Author, Book],
    resolvers: merge(resolvers, AuthorResolvers, BookResolvers)
});

