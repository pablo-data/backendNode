const express = require('express'); //forma que se tiene para traer modulos

var app = express(); //inicializar express

app.use('/', function(req,res){
    res.send("Hola mundo")
});

app.listen(3000); //donde se va a escuchar, elegimos puerto.
console.log('la app esta escuchando en http://localhost:3000');
