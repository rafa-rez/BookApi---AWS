const express = require('express');
const booksController = require('../controller/controller');
const router = express.Router();

router.get('/reviews', async (req, res) => {
    const params = req.query; 
    try {
        const data = await booksController.reviews(params); 
        res.json(data);
        console.log(params);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
