const productService = require("../services/productService");

async function getProducts(req, res) {
    try {
        const products = await productService.getAllProducts();

        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}

async function getProduct(req, res) {
    try {
        const product = await productService.getProductById(
            req.params.id
        );

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}

async function updateProduct(req, res) {
    try {
        const product = await productService.updateProduct(
            req.params.id,
            req.body
        );

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}

async function deleteProduct(req, res) {
    try {
        const product = await productService.deleteProduct(
            req.params.id
        );

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};