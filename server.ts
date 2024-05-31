import express from 'express'

const path = require('path');

const app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.resolve("frontend","index.html"))
})