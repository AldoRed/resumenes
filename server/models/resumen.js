const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// bookSchema implementatio in mongodb
const resumenSchema = new Schema({
    name: String,
    asignatura: String,
    tema: String,
    descripcion: String,
    content: String,
    userId: String
});

module.exports = mongoose.model('Resumen', resumenSchema);
