const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const { ApolloServer, gql } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schema');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;


// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

nextApp.prepare().then(() => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();

    server.applyMiddleware({ app });

    app.use(cookieParser());

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen({ port: port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port} ${server.graphqlPath}`)
    );
});



// app.prepare().then(() => {

//     const server = express();

//     const apolloServer = new ApolloServer({
//         // These will be defined for both new or existing servers
//         typeDefs,
//         resolvers,
//     });
//     apolloServer.applyMiddleware({ server });



//     server.use(cookieParser());

//     server.get('*', (req, res) => {
//         return handle(req, res);
//     });

//     server.listen({ port: port }, () =>
//         console.log(`🚀 Server ready at http://localhost:${port} ${server.graphqlPath}`)
//     );
// });