const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'static')));
