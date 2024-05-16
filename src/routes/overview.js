const express = require('express');
const booksController = require('../controller/controller');
const router = express.Router();

router.get('/overview', async (req, res) => {
    try {
        const data = await booksController.overview();
        res.json(data);
        console.log("deu certo - overview");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
