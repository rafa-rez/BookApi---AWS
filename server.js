const express = require('express')
const router = require('./src/routes/routes')

const port = 5000
const app = express()

app.use('/',router)

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});