const { merge } = require('lodash');
const { makeExecutableSchema } = require('apollo-server-express');


const { Book, BookResolvers } = require('./types/book');
const { Author, AuthorResolvers } = require('./types/author');

const { User, UserResolvers } = require('./types//user');
const { Search, SearchResolvers } = require('./types/search');

const Query = `
  type Query {
    _emptyQuery: String
  }
  type Mutation {
    _emptyMutation: String
  }
`;

const resolvers = {

};

module.exports = makeExecutableSchema({
  typeDefs: [Query, User, Search, Author, Book],
  resolvers: merge(resolvers, UserResolvers, SearchResolvers, AuthorResolvers, BookResolvers),
  context: ({ req }) => ({
    authScope: getScope(req.headers.authorization)
  })
});

