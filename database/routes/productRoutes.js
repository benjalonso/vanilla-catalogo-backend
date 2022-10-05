const Router = require('express');
const {getProducts, getProductsBySearchParams} = require('../controllers/productsController');

const router = Router();

router.get('/products', getProducts);

router.get('/products-search/', getProductsBySearchParams)

module.exports = router;