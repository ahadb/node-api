module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: "Product successfully created.",
    PRODUCT_FETCHED: "Products successfully fetched",
    PRODUCT_UPDATED: "Product successfully updated",
    PRODUCT_NOT_FOUND: "Product not found",
    PRODUCT_DELETED: "Product successfully deleted"
  },
  requestValidationMessage: {
    BAD_REQUEST: 'Invalid fields' 
  },
  databaseMessage: {
    INVALID_ID: "Invalid id"
  }
};
