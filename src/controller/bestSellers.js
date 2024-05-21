require('dotenv').config()
const fetch = require('node-fetch')
const services = require('../services/service')

async function bestSellers(params) { 
    try {
        const queryString = services.createURL(params)

        const url = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?${queryString}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Erro ao obter a lista dos livros mais vendidos')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Erro ao obter a lista dos livros mais vendidos:', error.message)
        return { error: error.message }
    }
}

module.exports = { bestSellers }