const express = require('express');

const playerRouter = express.Router();

const playerController = require('../controllers/player.controller');

playerRouter.post('/player/create-player', playerController.createPlayer);
playerRouter.post('/player/get-player', playerController.getPlayer);
playerRouter.put('/player/update-player', playerController.updatePlayer);

module.exports = playerRouter;
