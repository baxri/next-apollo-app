const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const routes = require('../routes')
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const RouterHandler = routes.getRequestHandler(nextApp)

nextApp.prepare().then(() => {
    const app = express();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(cookieParser());
   
    app.use(RouterHandler);

    // app.get('/bibi', (req, res) => {
    //     return handle(req, res);
    // });

    app.listen({ port: port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port}`)
    );
});
