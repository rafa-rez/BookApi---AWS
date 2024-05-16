const express = require('express');
const booksController = require('../controller/controller');
const router = express.Router();

router.get('/names', async (req, res) => {
    try {
        const data = await booksController.names();
        res.json(data);
        console.log("deu certo - names");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
