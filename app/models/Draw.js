const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/client');
const Member = require('./Member');

class Draw extends Sequelize.Model {}

Draw.init(
    {
        budget: {
            type: DataTypes.INTEGER
        },
        member_id : {
            type: DataTypes.INTEGER,
            references: {
                model: Member,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: 'draw',
    },
);

module.exports = Draw;
