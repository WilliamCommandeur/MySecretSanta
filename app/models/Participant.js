const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/client');
const Draw = require('./Draw');

class Participant extends Sequelize.Model {}

Participant.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        result_name: {
            type: DataTypes.TEXT,
            // allowNull: false,
        },
        draw_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Draw,
              key: 'id',
            }
        },
    },
    {
        sequelize,
        tableName: 'participant'
    },
);

module.exports = Participant;
