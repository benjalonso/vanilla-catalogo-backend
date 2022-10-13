const Router = require('express');
const {getProducts, getProductsBySearchParams, getProductsByCategory} = require('../controllers/productsController');

const router = Router();

router.get('/products', getProducts);

router.get('/productsBySearchBar', getProductsBySearchParams)

router.get('/productsByCategory', getProductsByCategory)

module.exports = router;