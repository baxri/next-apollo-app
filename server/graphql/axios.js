const { AuthenticationError, ApolloError } = require('apollo-server-express');
const axios = require('axios');
const { service_url } = require('./config');

module.exports = {
    post: async (path, args, token) => {

        try {
            const {data} = await axios.post(`${service_url}${path}`, args, {
                headers: {
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': (token ? token : 'none')
                }
            });

            return CheckForErrors(data, httpError = false);
        } catch (error) {
            console.log(error.message)
            CheckForErrors(error);
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

            return CheckForErrors(data, httpError = false);
        } catch (error) {
            CheckForErrors(error);
        }
    },

    protected: (token) => {
        if (!token || token.length < 10) {
            throw new AuthenticationError('Not Autorized');
        }
    }
}

function CheckForErrors(data, httpError = true) {

    if (!httpError) {
        var httpCode = 200;
        var httpMessage = "OK";

        var bodyError = data.error;
        var bodyMessage = data.message;
    } else {
        var httpCode = data.response.status ? data.response.status : null;
        var httpMessage = data.response.statusText ? data.response.statusText : null;

        var bodyError = data.response.data.message ? data.response.data.message : null;
        var bodyMessage = data.response.data.message ? data.response.data.message : null;
    }

    let type = null;
    let message = null;

    if (httpMessage) {
        message = httpMessage;
    }

    if (bodyMessage) {
        message = bodyMessage;
    }

    if (bodyError) {
        type = bodyError;
    }

    if(httpCode < 300){
        return data;
    }

    if (httpCode == 401) {
        throw new AuthenticationError(message);
    }else{
        throw new ApolloError(message, httpCode);
    }
}


