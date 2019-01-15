'use strict';

const express = require('express');

// Variables
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res, next)=> {
    res.status(200).json({
        message:"Welcome to nothingness"
    })
});

app.listen(PORT, (err, request) => {
    if (err) console.err(err);
    console.log(request);
});

module.exports = app;