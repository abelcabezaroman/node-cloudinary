//Realizamos los requires
const express = require('express');
require('./utils/db')
const gamesRoutes = require('./routes/games.routes')

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dvzrhtjtq',
    api_key: '267277254971932',
    api_secret: 'j4HrCT98UH4hOlEWlSNy6O3a6Tk'
});

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/games', gamesRoutes);

server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

server.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
