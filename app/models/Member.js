const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/client');

class Member extends Sequelize.Model {}

Member.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'member'
    },
);

module.exports = Member;
