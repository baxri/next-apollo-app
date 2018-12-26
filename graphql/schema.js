const { merge } = require('lodash');
const { gql } = require('apollo-server-express');
const resolvers = require('./resolvers')

const typeDefs = gql`
  type Book {
      id: Int
      title: String
      author: Author
  }

  type Author {
      name: String
      books: [Book]
  }

  type Query {
      hello: String
      books: [Book]
      book(id: Int!): Book
  }
`;

// const helloResolver = require('./resolvers/hello')
// const booksResolver = require('./resolvers/books')


// Merge all of the resolver objects together
// const resolvers = merge(
//   helloResolver,
//   booksResolver
// );

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;
