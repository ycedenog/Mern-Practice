const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');
const app = express(); //aqui se obtiene un objeto

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares: Funciones que se ejcecutan antes que las rutas
app.use(morgan('dev'));
app.use(express.json()); //Comprueba si es un tipo de dato JSON

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Aqui el servidor esta escuchando en el puerto 3000
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})