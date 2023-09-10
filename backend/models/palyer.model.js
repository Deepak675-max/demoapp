const sequelize = require("../helper/common/init_mysql")

const DataTypes = require("sequelize");

const Player = sequelize.define('Player', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthPlace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    career: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    numberOfMatches: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fifties: {
        type: DataTypes.STRING,
        allowNull: false
    },
    centuries: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wickets: {
        type: DataTypes.STRING,
        allowNull: false
    },
    average: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

Player.sync({ alter: true })
    .then(() => {
        console.log('Player table is synchronized.');
    })
    .catch((error) => {
        console.error('Error synchronizing Player table:', error);
    });

module.exports = Player;