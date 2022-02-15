const express = require("express");
const Product = require("../entities/productEntity");
const router = express.Router();

router.get("/view", (req, res) => {
    res.send("Teste");
})

router.post('/create', async (req, res) => {
    try {
        if (await Product.findOne(req.body)) {
            return res.status(400).send("Error: A product with these expecifications already exists");
        }
        const product = await Product.create(req.body);

        return res.send( {product} );
    } catch (err) {
        return res.status(400).send(`Error: ${err}`)
    }
})

module.exports = app => app.use('/product', router);