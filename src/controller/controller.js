require('dotenv').config()

// Função da rota "/best-sellers" desenvolvida por José
async function bestSellers() { 
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=Orwell&api-key=${process.env.API_KEY}`);
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
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?author=brandon_sanderson&api-key=${process.env.API_KEY}`);
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
async function overview() { 
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.API_KEY}`);
        if (!response.ok) {
            throw new Error('Erro ao obter os top 5 livros de uma data');
        }
        const data = await response.json();
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