const express = require('express');

const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));



//https://ejs.co/