require('dotenv').config()

async function bestSellers(){
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=Orwell&api-key=${process.env.API_KEY}`)
    const data = await response.json()
    return data
}

async function names(){
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?author=brandon_sanderson&api-key=${process.env.API_KEY}`)
    const data = await response.json()
    return data
}

async function overview(){
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.API_KEY}`)
    const data = await response.json()
    return data
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