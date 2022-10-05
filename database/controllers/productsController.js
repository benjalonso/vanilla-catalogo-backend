const Product = require('../models/productsModel');
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
    try {
       const {page, size} = req.query;
       
        const products = await Product.findAndCountAll({
            limit: parseInt(size),
            offset: page * size
        });
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}
const getProductsBySearchParams = async (req, res) => {
    const {name} = req.query
    try {
        const products = await Product.findAll({
            where: {
                name: {[Op.substring]: name }
            }
        });
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = { getProducts, getProductsBySearchParams };