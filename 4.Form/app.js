const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/', (req,res)=> {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.headers);
    res.send("Successfully received");
});

app.listen(3000);