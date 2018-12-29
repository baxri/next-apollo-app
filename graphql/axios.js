const axios = require('axios');
const { service_url } = require('./config');

module.exports = {
    post: async (path, args, token) => {
        const { data } = await axios.post(`${service_url}${path}`, args, {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            }
        });

        return data;
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