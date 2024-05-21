require('dotenv').config()
const fetch = require('node-fetch')
const services = require('../services/service')

async function overview(params) { 
    try {
        const queryString = services.createURL(params)

        const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?${queryString}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Erro ao obter os top 5 livros de uma data')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Erro ao obter os top 5 livros de uma data:', error.message)
        return { error: error.message }
    }
}

module.exports = { overview }