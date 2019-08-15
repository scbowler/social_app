const express = require('express');
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 9000;

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Server is working!</h1>');
});

server.listen(PORT, () => {
    console.log('Server listening @ PORT:' + PORT);
});
