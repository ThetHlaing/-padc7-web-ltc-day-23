const express = require('express');

const path = require('path');

const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.listen(3000);

//https://ejs.co/