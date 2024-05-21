const express = require('express')
const booksController = require('../controller/bestSellers')
const router = express.Router()

router.get('/best-sellers', async (req, res) => {
    const params = req.query
    try {
        const data = await booksController.bestSellers(params)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router
