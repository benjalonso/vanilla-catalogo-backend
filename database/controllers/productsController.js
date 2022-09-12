const Product = require('../models/productsModel');
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
        // console.log(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}
// const getProductsByCategory = async (req, res) => {
//     try {
//         const products = await Product.findAll({
//             where: {
//                 category: req.params.id
//             }
//         });
//         res.json(products);
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }

module.exports = { getProducts };