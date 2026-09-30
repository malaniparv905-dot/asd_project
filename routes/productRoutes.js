const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

const {
    cacheMiddleware,
    invalidateCache
} = require("../middleware/cache");


// GET all products
router.get(
    "/products",
    cacheMiddleware,
    productController.getProducts
);


// GET product by ID
router.get(
    "/products/:id",
    cacheMiddleware,
    productController.getProduct
);


// POST
router.post(
    "/products",
    invalidateCache,
    productController.createProduct
);


// PUT
router.put(
    "/products/:id",
    invalidateCache,
    productController.updateProduct
);


// PATCH
router.patch(
    "/products/:id",
    invalidateCache,
    productController.updateProduct
);


// DELETE
router.delete(
    "/products/:id",
    invalidateCache,
    productController.deleteProduct
);


module.exports = router;