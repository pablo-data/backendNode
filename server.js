const express = require('express'); //forma que se tiene para traer modulos
const bodyParser = require('body-parser');

const response = require('./network/response');

// const router = require('./components/message/network');
const router = require('./network/routes');

var app = express(); //inicializar express

// configurando bodyParser nueva version sin body-parser solo con express
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//le paso a routes la app
router(app);




//servidor estatico de express
app.use('/app', express.static('public'));



app.listen(3000); //donde se va a escuchar, elegimos puerto.
console.log('la app esta escuchando en http://localhost:3000');
