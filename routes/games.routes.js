// Archivo character.routes.js dentro de la carpeta routes
const express = require('express');

const Game = require('../models/Game');
const { upload, uploadToCloudinary } = require("../middlewares/file.middlewares");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const games = await Game.find();
        return res.status(200).json(games)
    } catch (error) {
        return next(error)
    }
});

router.post('/', [upload.single('img'), uploadToCloudinary], async (req, res, next) => {
    try {

        req.body.img = req.file_url;
        const newGame = new Game(req.body);

        // Guardamos el personaje en la DB
        const createdGame = await newGame.save();
        return res.status(201).json(createdGame);
    } catch (error) {
        // Lanzamos la función next con el error para que lo gestione Express
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Game.findByIdAndDelete(id);
        return res.status(200).json('Game deleted!');
    } catch (error) {
        return next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Game.findByIdAndDelete(id);
        return res.status(200).json('Game deleted!');
    } catch (error) {
        return next(error);
    }
});

module.exports = router;


