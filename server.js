const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const server = new ApolloServer(schema);
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