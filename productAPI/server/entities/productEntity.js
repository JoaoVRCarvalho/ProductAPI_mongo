const mongoose = require("../database/dbConnection");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model("Product", productSchema); 

module.exports = Product;