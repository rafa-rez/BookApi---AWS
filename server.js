const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

fs.readdirSync(path.join(__dirname, 'src', 'routes')).forEach(file => {
    if (file.endsWith('.js')) {
        const route = require(`./src/routes/${file}`);                  
        app.use('/books', route);
    }
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});
