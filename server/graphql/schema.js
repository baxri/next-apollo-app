const { merge } = require('lodash');
const { makeExecutableSchema } = require('apollo-server-express');


const { Book, BookResolvers } = require('./types/book');
const { Author, AuthorResolvers } = require('./types/author');

const { User, UserResolvers } = require('./types/user');
const { Search, SearchResolvers } = require('./types/search');
const { Company, CompanyResolvers } = require('./types/company');
const { Feed, FeedResolvers } = require('./types/feed');
const { Folder, FolderResolvers } = require('./types/folder');

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
  typeDefs: [
    Query,
    User,
    Company,
    Search,
    Author,
    Book,
    Feed,
    Folder
  ],
  resolvers: merge(
    resolvers,
    UserResolvers,
    CompanyResolvers,
    SearchResolvers,
    AuthorResolvers,
    BookResolvers,
    FeedResolvers,
    FolderResolvers
  ),
  context: ({ req }) => ({
    authScope: getScope(req.headers.authorization)
  })
});

