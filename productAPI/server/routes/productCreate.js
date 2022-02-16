const express = require("express");
const Product = require("../entities/productEntity");
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        // verifies if the product already exists, or if the name already has been registered
        if (await Product.findOne(req.body) || await Product.findOne(req.body.name)) {
            return res.status(400).send("Error: A product with these expecifications already exists");
        }
        // send the product to the mongoDB
        const product = await Product.create(req.body);

        return res.send( {product} );
    } catch (err) {
        return res.status(400).send(`Error: ${err}`)
    }
})

module.exports = app => app.use('/product', router);