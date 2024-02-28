const mongoose = require('mongoose');

const uri = "mongodb+srv://Pablo:pablo13072735@pablo.bxwaig9.mongodb.net/RickYMorty?retryWrites=true&w=majority";

mongoose.connect(uri, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión'));

db.once('open', () => {
    const dbName = db.name;
    console.log(`Conectado a la base de datos ${dbName}`)
});
