const express = require('express');
const productsRouter = require('./database/routes/productRoutes');
const cors = require('cors');

const app = express();

// middlewares!!!!!!
app.use(express.json());

app.use(cors({
    origin: '*'
}));
app.use(productsRouter);

module.exports = app;