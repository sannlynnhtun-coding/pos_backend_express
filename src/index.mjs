import express from "express";
import protductCategoriesRouter from "../src/routes/productCategories.mjs";
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Routers
app.use(protductCategoriesRouter);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
