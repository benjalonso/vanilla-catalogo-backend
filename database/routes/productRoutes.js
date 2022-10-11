const Router = require('express');
const {getProducts, getProductsBySearchParams} = require('../controllers/productsController');

const router = Router();

router.get('/products', getProducts);

router.get('/productsBySearchBar', getProductsBySearchParams)

module.exports = router;