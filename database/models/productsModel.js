/**
 * Archivo que define el modelo de datos de los productos
 * - Se usa el archivo database.js que se encuentra en la carpeta database
 * - Se usa el metodo define() para definir el modelo de datos
 * 
 */
const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    modelName: "Product",
    tableName: "product",
  }
);

module.exports = Product;
