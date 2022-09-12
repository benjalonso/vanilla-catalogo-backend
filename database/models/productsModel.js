const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');


const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    timestamps: false,
    modelName: 'Product',
    tableName: 'product'
});

module.exports = Product;