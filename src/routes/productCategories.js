import express from "express";
import {
  categoriesList,
  categoryStore,
  categoryShow,
  categoryUpdate,
  categoryDelete,
} from "../controllers/productCategoryController.js";

const router = express.Router();

router.get("/", categoriesList);

router.post("/", categoryStore);

router.get("/:id", categoryShow);

router.put("/:id", categoryUpdate);

router.delete("/:id", categoryDelete);

export default router;
