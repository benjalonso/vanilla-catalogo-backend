/**
 * Archivo de rutas para el modelo Category
 * - Se usa el archivo categoryController.js que se encuentra en la carpeta controllers
 * - Se usa el metodo Router() de express para crear las rutas
 * - Se usa el metodo get() para crear las rutas get
 * 
 * @param {string} req
 * @param {string} res
 * @returns {json}
 * 
 */

const Router = require('express');
const {getCategoryProducts, getCategory} = require('../controllers/categoryController');

const router = Router();

router.get('/category/:id/products', getCategoryProducts);
router.get('/category/:id', getCategory);

module.exports = router;