const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// authorSchema implementatio in mongodb
const userSchema = new Schema({
    username: {type: String, unique:true},
    email: {type: String, unique: true},
    password: String
});

module.exports = mongoose.model('User', userSchema);