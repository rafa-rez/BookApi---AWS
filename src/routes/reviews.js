const express = require('express');
const booksController = require('../controller/controller');
const router = express.Router();

router.get('/reviews', async (req, res) => {
    try {
        const data = await booksController.reviews();
        res.json(data);
        console.log("deu certo - reviews");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
