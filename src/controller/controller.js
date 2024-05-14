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

module.exports = { bestSellers, names, overview }