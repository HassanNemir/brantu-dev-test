const mongoose = require('mongoose');
const schema = require('./models/Product');
const cors = require('cors')
const productCR = require('./controllers/product.ctrl');
const routes = require('./routes/index');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/products')
    .then(() => console.log('Connected to the database ... '))
schema();
app.use(cors())
app.use('/api', routes);
app.listen(3001, () => {
    console.log(`Server started...`);
});