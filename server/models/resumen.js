const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// bookSchema implementatio in mongodb
const resumenSchema = new Schema({
    name: String,
    content: String,
    userId: String
});

module.exports = mongoose.model('Resumen', resumenSchema);