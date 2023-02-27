const productService = require("../service/productService");
const constants = require("../constants");

module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await productService.createProduct(req.body);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = serviceResponse;
  } catch (err) {
    console.log(err);
    response.message = err.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getAllProducts = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await productService.getAllProducts(req.query);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = serviceResponse;
  } catch (err) {
    console.log("Something went wrong in the controller", err);
    response.message = err.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getProductById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await productService.getProductById(req.params);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = serviceResponse;
  } catch (err) {
    console.log("Something went wrong in the controller", err);
    response.message = err.message;
  }

  return res.status(response.status).send(response);
};

module.exports.updateProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body
    });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_UPDATED;
    response.body = serviceResponse;
  } catch (err) {
    console.log("Something went wrong in the controller", err);
    response.message = err.message;
  }

  return res.status(response.status).send(response);
};

module.exports.deleteProduct = async (req, res) => {
  console.log("+++HERE___")
  let response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await productService.deleteProduct(req.params)
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_DELETED;
    response.body = serviceResponse;
  } catch (err) {
    console.log("Something went wrong in the controller", err);
    response.message = err.message;
  }

  return res.status(response.status).send(response);
};
