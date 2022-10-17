/**
 * Archivo de rutas para el modelo Product
 * - Se usa el archivo productsController.js que se encuentra en la carpeta controllers
 * - Se usa el metodo Router() de express para crear las rutas
 * - Se usa el metodo get() para crear las rutas get
 * 
 * @param {string} req
 * @param {string} res
 * @returns {json}
 */
const Router = require('express');
const {getProducts, getProductsBySearchParams, getProductsByCategory} = require('../controllers/productsController');

const router = Router();

router.get('/products', getProducts);

router.get('/productsBySearchBar', getProductsBySearchParams)

router.get('/productsByCategory', getProductsByCategory)

module.exports = router;