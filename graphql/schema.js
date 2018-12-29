const { merge } = require('lodash');
const { makeExecutableSchema } = require('apollo-server-express');


const { Book, BookResolvers } = require('./types/book');
const { Author, AuthorResolvers } = require('./types/author');

const { Token, TokenResolvers } = require('./types/token');
const { User, UserResolvers } = require('./types//user');

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {

};

module.exports = makeExecutableSchema({
    typeDefs: [Query, Token, User, Author, Book],
    resolvers: merge(resolvers, TokenResolvers, UserResolvers, AuthorResolvers, BookResolvers),
    context: ({ req }) => ({
        authScope: "gggggggggg"
    })
});

