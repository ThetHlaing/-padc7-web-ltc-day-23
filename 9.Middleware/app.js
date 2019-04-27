const express = require('express');

const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.use((req,res,next) =>{
    const headers =  req.headers;
    console.log(headers);
    if(headers.referer === 'https://localhost:2999'){
        res.send("You are not allowed");
    }
    else{
        next();
    }
    
})

app.get('/', (req,res)=>{
    res.send("Hello from Middleware");
})

app.get('/protected', (req,res)=>{
    res.send("Hello from protected");
})

app.get('/protected2', (req,res)=>{
    res.send("Hello from protected");
})


app.get('/protected3', (req,res)=>{
    res.send("Hello from protected");
})

app.listen(3000);