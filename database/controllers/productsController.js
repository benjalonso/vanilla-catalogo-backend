const Product = require("../models/productsModel");
const { Op } = require("sequelize");

// const getProducts = async (req, res) => {
const getProducts = async (req, res) => {
  try {
    const { page, size = 8 } = req.query;
    let options = {
      limit: parseInt(size),
      offset: page * size,
    };
    const products = await Product.findAndCountAll(options);
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getProductsByCategory = async (req, res) => {
  try {
    const { page, size = 8, category } = req.query;
    let options = {
      limit: parseInt(size),
      offset: page * size,
      where: {
        category: category,
      },
    };
    const products = await Product.findAndCountAll(options);
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getProductsBySearchParams = async (req, res) => {
  try {
    const { page, size = 8, name } = req.query;

    const products = await Product.findAndCountAll({
      where: {
        name: { [Op.substring]: name },
      },
      limit: parseInt(size),
      offset: page * size,
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductsBySearchParams, getProductsByCategory };
