const mongoose = require('mongoose');// modelar datos

const { Schema } = mongoose; // Definimos esquema de los datos

const TaskSchema = new Schema({
    title:  { type: String, required: true },
    description: { type: String, required: true}
});

module.exports = mongoose.model('Task', TaskSchema);

