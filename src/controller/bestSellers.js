require('dotenv').config()
const fetch = require('node-fetch')

async function bestSellers(params) { 
    try {
        //queryParams filtra parâmetros nulos
        //Acredito que será melhor se transformarmos esse código em uma função posteriormente
        const queryParams = Object.keys(params)
            .filter(key => params[key] !== undefined && params[key] !== null && params[key] !== '')
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');

        //Aqui a url é montada para a requisição
        const apiKey = `api-key=${process.env.API_KEY}`;
        const queryString = queryParams ? `${queryParams}&${apiKey}` : apiKey;

        const url = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?${queryString}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro ao obter a lista dos livros mais vendidos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter a lista dos livros mais vendidos:', error.message);
        return { error: error.message };
    }
}

module.exports = { bestSellers }