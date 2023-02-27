const Joi = require("@hapi/joi");

// there is no reason to continue if we are not getting
// what is required, why unecessarily make a trip to the
// controller, then service, then DB and have the response
// send an error message

// lets do this using joi and our middleware
module.exports.createProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  brand: Joi.string().required(),
});

module.exports.getAllProductSchema = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string(),
});

module.exports.updateProductSchema = Joi.object().keys({
  name: Joi.string(),
  price: Joi.number(),
  brand: Joi.string(),
})
