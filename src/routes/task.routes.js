const express = require('express');
const router = express.Router(); //Devuelve un objeto que puede ingresar rutas

const Task = require('../models/task');

//primero se consulta y luego responde 
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

//Metodo post que nos permite agregar datos a traves de Http
router.post('/', async (req, res) => {
    console.log(req.body);
})
module.exports = router;