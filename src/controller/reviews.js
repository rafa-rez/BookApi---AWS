require('dotenv').config()
const fetch = require('node-fetch')

async function reviews(params) { 

    try { 
        // Tratamento inicial dos parâmetros (Filtragem); 
        const queryParams = Object.keys(params)
        .filter(key => params[key] !== undefined && params[key] !== null && params[key] !== '')
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&'); 

        // Construção da URL 
        const apiKey = `api-key=${process.env.API_KEY}`;
        const queryString = queryParams ? `${queryParams}&${apiKey}` : apiKey; 
        const url = `https://api.nytimes.com/svc/books/v3/reviews.json?${queryString}`; 

        // Realizando a requisição; 
        const response = await fetch (url); 
        if (!response.ok) {
            throw new Error('Erro ao obter resenhas dos livros');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter resenhas dos livros:', error.message);
        return { error: error.message };
    }
}

module.exports = { reviews }