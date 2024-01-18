const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
    define: {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },
});

module.exports = sequelize;