const express = require("express");
const dotEnv = require("dotenv").config();
const cors = require("cors");

const dbConnection = require("./database/connection");

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

// cors, third party middleware
app.use(cors());

// express middleware, as of 4+ (json, urlencode included in express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", require("./routes/productRoutes"));

app.get("/", (req, res, next) => {
  res.send("Node Server");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// error middleware from express
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
