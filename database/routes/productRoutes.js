const Router = require('express');
const {getProducts, getProductsBar} = require('../controllers/productsController');

const router = Router();

router.get('/products', getProducts);
// router.get('/products/:id', getProductsByCategory) YANO!

module.exports = router;