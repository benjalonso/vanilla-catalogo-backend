const Router = require('express');
const {getCategoryProducts, getCategory} = require('../controllers/categoryController');

const router = Router();

router.get('/category/:id/products', getCategoryProducts);
router.get('/category/:id', getCategory);

module.exports = router;