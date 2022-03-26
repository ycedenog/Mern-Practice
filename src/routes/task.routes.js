const express = require('express');
const router = express.Router(); //Devuelve un objeto que puede ingresar rutas

const Task = require('../models/task');

//primero se consulta y luego responde 
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);

})

//Metodo post que nos permite agregar datos a traves de Http
router.post('/', async (req, res) => {
    const {
        title,
        description
    } = req.body;
    const task = new Task({
        title,
        description
    });
    await task.save();
    res.json({
        status: 'Task Saved'
    });
})

//Metodo put para actualizar datos a traves de Http

router.put('/:id', async (req, res) => {
    const {
        title,
        description
    } = req.body;
    const newTask = {
        title,
        description
    };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        status: 'Task Updated'
    });
});

//Metodo delete para borrar datos 
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Task Deleted'
    });
});

module.exports = router;