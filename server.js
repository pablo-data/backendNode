const express = require('express'); //forma que se tiene para traer modulos
const router = express.Router(); //definimos el router

var app = express(); //inicializar express

app.use(router); //que utilize router

router.get('/', function (req, res) {
    res.send('Lista de mensajes');
});

router.post('/', function(req,res){
    res.send('Mensaje añadido');
});

// app.use('/', function(req,res){
//     res.send("Hola mundo")
// });

app.listen(3000); //donde se va a escuchar, elegimos puerto.
console.log('la app esta escuchando en http://localhost:3000');
