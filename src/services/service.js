require('dotenv').config()

function createURL(params){
    const queryParams = Object.keys(params)
            .filter(key => params[key] !== undefined && params[key] !== null && params[key] !== '')
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');

    const apiKey = `api-key=${process.env.API_KEY}`;
    const queryString = queryParams ? `${queryParams}&${apiKey}` : apiKey;

    return queryString
}

module.exports = { createURL }