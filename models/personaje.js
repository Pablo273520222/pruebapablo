const mongoose = require('mongoose');
const personajeSchema = new mongoose.Schema({
    id:Number,
    name:String,
    status:String,
    species:String,
    image:String
});

const Personaje = mongoose.model('Personaje', personajeSchema);
module.exports = Personaje;