const Product = require('./../models/Product')

async function saveProduct(obj) {
    const product = await new Product(obj);
    const result = await product.save();
    return result;
}
async function getProduct() {
    const products = await Product.find();
    return products;
}
module.exports = {
    saveProduct,
    getProduct
}