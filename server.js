const next = require('next');
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: !dev,
    signed: false,
};

const authenticate = async (email, password) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    return data.find(user => {
        if (user.email === email && user.website === password) {
            return user;
        }
    });
}

app.prepare().then(() => {

    const server = express();

    server.use(cookieParser());

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {

        if (err) {
            throw err;
        }

        console.log(`Listening on port ${port}`);
    })
});