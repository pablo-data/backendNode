
const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "Custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function(req,res){
    console.log(req.query)
   if(req.query.error == "ok"){
    response.error(req, res, 'error inesperado', 500, 'Es solo una simulacion de los errores');
   }else{
    response.success(req, res, 'Creado perfectamente', 201); 
   }
   
});

module.exports = router;
