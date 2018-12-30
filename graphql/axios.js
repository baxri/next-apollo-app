const { AuthenticationError, ApolloError } = require('apollo-server-express');
const axios = require('axios');
const { service_url } = require('./config');

module.exports = {
    post: async (path, args, token) => {
        try {
            const { data } = await axios.post(`${service_url}${path}`, args, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': (token ? token : 'none')
                }
            });

            return data;
        } catch (error) {
            ThrowError(error);
        }
    },

    get: async (path, token) => {
        try {
            const { data } = await axios.get(`${service_url}${path}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token
                }
            });

            return data;
        } catch (error) {
            ThrowError(error);
        }
    }
}

function ThrowError(error) {

    let httpCode = error.response.status ? error.response.status : null;
    let httpMessage = error.response.statusText ? error.response.statusText : null;

    let bodyError = error.response.data.error ? error.response.data.error : null;
    let bodyMessage = error.response.data.message ? error.response.data.message : null;

    let type = 'general_error';
    let message = 'internal_server_error';

    if (httpMessage) {
        message = httpMessage;
    }

    if (bodyMessage) {
        message = bodyMessage;
    }

    if (bodyError) {
        type = bodyError;
    }

    if (bodyError) {
        throw new ApolloError(message, type);
    }

    if (httpCode == 401) {
        throw new AuthenticationError(message);
    }

    throw new ApolloError(message, type);
}