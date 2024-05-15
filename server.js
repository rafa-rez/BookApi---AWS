const express = require('express')
const router = require('./src/routes/routes')
const path = require('path')

const port = 5000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use('/books',router)

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});