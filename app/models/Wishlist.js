const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/client');
const Participant = require('./Participant');

class Wishlist extends Sequelize.Model {}

Wishlist.init(
    {
        item_list: {
            type: DataTypes.TEXT,
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
        tableName: 'wishlist'
    }
);

module.exports = Wishlist;
