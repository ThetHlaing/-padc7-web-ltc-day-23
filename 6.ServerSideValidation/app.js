const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const Joi = require('@hapi/joi');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.post('/', (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send("Validation error occur");
        }
        else{
            console.log(result);
            res.send("Submission success");
        }
    })

    
})

app.listen(3000);

//https://www.npmjs.com/package/@hapi/joi