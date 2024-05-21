require('dotenv').config()
const fetch = require('node-fetch')

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

module.exports = { names }