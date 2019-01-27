const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser')

const schema = require('./graphql/schema');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const server = new ApolloServer({
        debug: false,
        schema,
        introspection: true,
        playground: true,
        context: ({ req }) => ({
            token: req.headers.authorization
        })
    });

    const app = express();

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    
    app.use(cookieParser());

    server.applyMiddleware({ app });
    

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen({ port: port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port}, graphQL path: ${server.graphqlPath}`)
    );
});
