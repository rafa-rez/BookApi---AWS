require('dotenv').config()
const fetch = require('node-fetch')
const services = require('../services/service')

async function reviews(params) { 
    try { 
        const queryString = services.createURL(params)

        const url = `https://api.nytimes.com/svc/books/v3/reviews.json?${queryString}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Erro ao obter resenhas dos livros')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Erro ao obter resenhas dos livros:', error.message)
        return { error: error.message }
    }
}

module.exports = { reviews }