// Archivo Character.js dentro de la carpeta models
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const gameSchema = new Schema(
    {
        name: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
        platforms: [{ type: String }],
        img: { type: String,  required: true },
    },
    {
        // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
        timestamps: true,
    }
);

// Creamos y exportamos el modelo Character
const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
