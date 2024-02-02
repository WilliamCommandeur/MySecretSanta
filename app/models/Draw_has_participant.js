const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/client');
const Draw = require('./Draw');
const Participant = require('./Participant');

class DrawHasParticipant extends Sequelize.Model {}

DrawHasParticipant.init(
    {
        draw_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Draw,
                key: 'id',
            },
        },
        participant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Participant,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: 'draw_has_participant',
    },
);

module.exports = DrawHasParticipant;
