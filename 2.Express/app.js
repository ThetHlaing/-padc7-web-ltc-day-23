const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('This is home page');
});

app.get('/example', (req,res)=>{
    res.send('This is example page');
});

app.get('/info/:name/:age', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " age : " + req.params.age + req.query.color);
});

app.listen(3300);