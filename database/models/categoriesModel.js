const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const Product = require("./productsModel");

const Category = sequelize.define(
  "kategory",
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
  },
  {
    timestamps: false,
    modelName: "Category",
    tableName: "kategory",
  }
);

Category.hasMany(Product, {
  foreinkey: "category",
  sourceKey: "id",
});
Product.belongsTo(Category, { foreinkey: "category", targetId: "id" });

module.exports = Category;
 