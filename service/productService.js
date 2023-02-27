const Product = require("../database/models/productModel");
const { formatMongoData, checkObjectId } = require("../helper/dbHelper");
const constants = require("../constants");

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });
    let result = await product.save();
    // this is just one document, else will need loop
    return formatMongoData(result);
  } catch (err) {
    console.log("Something went wrong in service", err);
    throw new Error("Could not create product");
  }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    // this is just one document, else will need loop
    return formatMongoData(products);
  } catch (err) {
    console.log("Something went wrong in service", err);
    throw new Error("Could not create product");
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    // this is just one document, else will need loop
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (err) {
    console.log("Something went wrong in service", err);
    throw new Error("Could not create product");
  }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    // returns the document as well unline findOne
    let product = await Product.findOneAndReplace({ _id: id }, updateInfo, {
      new: true,
    });
    // this is just one document, else will need loop
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (err) {
    console.log("Something went wrong in service", err);
    throw new Error("Could not create product");
  }
};

module.exports.deleteProduct = async (id) => {
  try {
    checkObjectId(id);
    // returns the document as well unline findOne
    let product = await Product.findByIdAndDelete(id);
    // this is just one document, else will need loop
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (err) {
    console.log("Something went wrong in service: deleteProduct", err);
    throw new Error("Could not create product");
  }
};
