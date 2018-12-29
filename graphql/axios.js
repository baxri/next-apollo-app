const axios = require('axios');
const { service_url } = require('./config');

module.exports = {
    post: async (path, data, token) => {

    },

    get: async (path, token) => {
        const { data } = await axios.get(`${service_url}${path}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            }
        });

        return data;
    }
}