const express = require('express');
const booksController = require('../controller/names');
const router = express.Router();

router.get('/names', async (req, res) => {
    try {
        const data = await booksController.names();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
