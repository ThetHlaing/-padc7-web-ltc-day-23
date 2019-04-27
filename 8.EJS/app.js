const express = require('express');

const path = require('path');

const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.set('view engine','ejs');

app.get('/:name',(req,res)=>{
    const name = req.params.name;
    res.render('index',{data : {
        name : name,
        items : ['bananna','apple','orange','lime'],
        isLoggedIn : false
    }});
})

app.listen(3000);

//https://ejs.co/