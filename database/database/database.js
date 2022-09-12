// Aquí hacemos la conexión de sequelize con la base de datos!
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;
