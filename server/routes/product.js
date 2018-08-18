const Product = require('../controllers/product.ctrl');
const productsJSON = require('./../../products.json');
const express = require('express');
const router = express.Router();


router.get(`/product/`, async (req, res) => {

    products = await Product.getProduct();
    if (products == '') {
        productsJSON.map(async (product) => {
            await Product.saveProduct(product);
        })
        res.send(await products);
    } else {
        res.send(await products);
    }
});

module.exports = router;