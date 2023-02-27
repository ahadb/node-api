const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log('DB connected!')
  } catch (err) {
    console.log("DB connectivity error", err);
    throw new Error(error);
  }
};
