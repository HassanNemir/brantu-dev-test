const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        price: Number,
        category: {
            id: Number,
            name: String
        },
        brand: String
    }
);
module.exports = mongoose.model('Product', ProductSchema);