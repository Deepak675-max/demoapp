const Player = require('../models/palyer.model');

const createPlayer = async (req, res, next) => {
    try {
        const playerData = req.body;
        console.log(playerData);
        const newPlayer = new Player(playerData);
        await newPlayer.save();

        if (res.headersSent === false) {
            res.status(200).send({
                error: false,
                data: {
                    message: "player created successfully.",
                },
            });
        }
    } catch (error) {
        next(error);
    }
}


const getPlayer = async (req, res, next) => {
    try {
        const playerName = req.body.name;
        const player = await Player.findOne({
            where: {
                name: playerName
            }
        });
        if (res.headersSent === false) {
            res.status(200).send({
                error: false,
                data: {
                    playerData: player,
                    message: "player created successfully.",
                },
            });
        }
    } catch (error) {
        next(error);
    }
}

const updatePlayer = async (req, res, next) => {
    try {
        const playerId = req.params.id;
        const playerData = req.body;
        const updatedPlayer = await Player.update(playerData, {
            where: {
                _id: playerId
            }
        })
        if (res.headersSent === false) {
            res.status(200).send({
                error: false,
                data: {
                    message: "player created successfully.",
                },
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createPlayer,
    getPlayer,
    updatePlayer
}