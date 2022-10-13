const Category = require("../models/categoriesModel");
const Product = require("../models/productsModel");

 const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        res.json(category);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getCategoryProducts = async (req, res) => {
     const {id} = req.params;
  try {
    const { page, size = 8 } = req.query;
    let options = {
      limit: parseInt(size),
      offset: page * size,
    };
    const products = await Product.findAll(
        { where: {
            category: id
            }});
    res.json(products);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = { getCategoryProducts, getCategory };
