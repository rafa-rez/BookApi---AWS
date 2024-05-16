const express = require('express');
const booksController = require('../controller/controller');
const router = express.Router();

router.get('/best-sellers', async (req, res) => {
    try {
        const data = await booksController.bestSellers();
        res.json(data);
        console.log(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
