require('dotenv').config()
const fetch = require('node-fetch')

async function overview(params) { 
    try {
        //Filtra parâmetros nulos
        const queryParams = Object.keys(params)
        .filter(key => params[key] !== undefined && params[key] !== null && params[key] !== '')
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');


        //Montando url
        const apiKey = `api-key=${process.env.API_KEY}`;
        const queryString = queryParams ? `${queryParams}&${apiKey}` : apiKey;

        const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?${queryString}`;
        console.log('fazendo requisição') //teste
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao obter os top 5 livros de uma data');
        }
        const data = await response.json();
        console.log(data) //teste
        return data;
    } catch (error) {
        console.error('Erro ao obter os top 5 livros de uma data:', error.message);
        return { error: error.message };
    }
}

module.exports = { overview }