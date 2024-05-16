const express = require('express')
const booksController = require('../controller/controller')
const router = express.Router()


// - José
router.get('/best-sellers', async (req, res) => {
    //filtros
    //age-group -- author -- contributor -- isbn -- offset -- price -- publisher -- title 
    try {
        const data = await booksController.bestSellers()
        res.json(data)
        console.log(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// - Rafael
router.get('/names', async (req, res) => {
    try {
        const data = await booksController.names()
        res.json(data)
        console.log("deu certo - names")
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// - João Victor
router.get('/overview', async (req, res) => {
    try {
        const data = await booksController.overview()
        res.json(data)
        console.log("deu certo - overview")
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}) 

// - Guilherme 
router.get('/reviews', async (req, res) => {
    try {
        const data = await booksController.reviews()
        res.json(data)
        console.log("deu certo - reviews")
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router