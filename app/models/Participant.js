const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/client');

class Participant extends Sequelize.Model {}

Participant.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            // allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'participant'
    },
);

module.exports = Participant;
