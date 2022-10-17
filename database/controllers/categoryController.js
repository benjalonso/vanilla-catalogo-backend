/**
 * Importamos los modelos de la base de datos para poder usarlos
 * en este archivo
 */
const Category = require("../models/categoriesModel");
const Product = require("../models/productsModel");
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 *  
 * - Se usa el modelo Category para obtener todos los datos de la tabla categories
 * - Se usa el metodo findAll() para obtener todos los datos de la tabla categories
 * - Se usa el metodo json() para enviar los datos en formato json
 * - Se usa el metodo catch() para atrapar los errores
 * - Se usa el metodo status() para enviar el codigo de erro
 */
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
