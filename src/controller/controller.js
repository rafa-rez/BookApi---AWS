require('dotenv').config()
const fetch = require('node-fetch');
// Função da rota "/best-sellers" desenvolvida por José
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

// Função da rota "/names" desenvolvida por Rafael 
async function names() { 
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.API_KEY}`);
        if (!response.ok) {
            throw new Error('Erro ao obter os nomes das listas de livros');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter os nomes das listas de livros:', error.message);
        return { error: error.message };
    }
}

// Função da rota "/overview" desenvolvida por João Victor 
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

// Função da rota "/reviews" desenvolvida por: Guilherme 
async function reviews() { 
    const author = 'Stephen King';
    const encodedAuthor = encodeURIComponent(author);
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${encodedAuthor}&api-key=${process.env.API_KEY}`);
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
 

module.exports = { bestSellers, names, overview, reviews }