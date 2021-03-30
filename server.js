const express = require('express'); //forma que se tiene para traer modulos
const bodyParser = require('body-parser');
const router = express.Router(); //definimos el router

const response = require('./network/response');

var app = express(); //inicializar express

// configurando bodyParser nueva version sin body-parser solo con express
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//configurando bodyParser siempre va antes del router
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(router); //que utilize router




router.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "Custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req,res){
    console.log(req.query)
   if(req.query.error == "ok"){
    response.error(req, res, 'error simulado', 400);
   }else{
    response.success(req, res, 'Creado perfectamente', 201); 
   }
   
});

//servidor estatico de express
app.use('/app', express.static('public'));

// app.use('/', function(req,res){
//     res.send("Hola mundo")
// });

app.listen(3000); //donde se va a escuchar, elegimos puerto.
console.log('la app esta escuchando en http://localhost:3000');
