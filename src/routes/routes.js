const express = require('express')
const booksController = require('../controller/controller')
const router = express.Router()


// - José
router.get('/best-sellers', async (req, res) => {
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
        console.log("deu certo")
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


module.exports = router

