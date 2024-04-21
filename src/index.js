import express from "express";
import productCategoriesRouter from "./routes/productCategories.js";

import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Routers
app.use("/product-categories", productCategoriesRouter);
// app.use(productCategoriesRouter);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
