const express = require("express");
const Product = require("../entities/productEntity");
const router = express.Router();

// sends a list of all products 
router.get("/view", async (req, res) => {
    let productList = await Product.find()
    res.status(200).send(productList);
})
// sends the product by id
router.get("/view/:_id", async (req, res) => {
    let productById = await Product.findById(req.params);
    res.send(productById);
})

module.exports = app => app.use('/product', router);