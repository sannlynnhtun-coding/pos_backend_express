import express  from "express";
import protductCategoriesRouter from '../src/routes/productCategories.mjs'



const app = express();

app.use(express.json());
app.use(protductCategoriesRouter)
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3500;



app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
