const Joi = require('@hapi/joi');

const person = {
    info : {
        name : "PADC",
        email : "padc@pacd.com",
        object_array : [{obj1 : "obj1"},{obj2 : "obj2"},]
    },
    fruit : ['bananna',1,'orange']
}

const infoSchema = Joi.object().keys({
    name : Joi.string().required(),
    email : Joi.string().email().required(),
    object_array : Joi.array().items(Joi.object())
})

const fruitScheme = Joi.array().items(Joi.string());

const scheme = Joi.object().keys({
    info : infoSchema,
    fruit : fruitScheme
});

Joi.validate(person,scheme,(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
})