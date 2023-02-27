const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../schema/productSchema");

router.post(
  "/",
  joiSchemaValidation.validateBody(productSchema.createProductSchema),
  productController.createProduct
);

router.get("/:id", productController.getProductById);

router.put("/:id",
  joiSchemaValidation.validateBody(productSchema.updateProductSchema),
  productController.updateProduct
)

router.get(
  "/",
  joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
  productController.getAllProducts
);

router.delete("/", productController.deleteProduct)

module.exports = router;
