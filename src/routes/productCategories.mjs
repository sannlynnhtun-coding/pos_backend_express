import { Router } from "express";
import productCategoryController from "../controllers/productCategoryController.js";

const router = Router();

const data = [
  {
    productCategoryId: 1,
    productCategoryCode: "P001",
    productCategoryName: "Foods",
  },
];

router.get(
  "/product-categories",
  productCategoryController.list(request, response)
);

router.get("/product-categories/:id", (request, response) => {
  console.log(request.params);
  const paredId = parseInt(request.params.id);
  if (isNaN(paredId)) {
    return response.sendStatus(400);
  }
  const findUser = data.find((d) => {
    return d.productCategoryId === paredId;
  });
  if (!findUser) {
    return response.sendStatus(404);
  }
  return response.status(200).send(findUser);
});

router.post("/product-categories", (request, response) => {
  const { body } = request;
  const newUser = {
    productCategoryId: data[data.length - 1].productCategoryId + 1,
    productCategoryCode: `P${(
      parseInt(data[data.length - 1].productCategoryCode.slice(1)) + 1
    )
      .toString()
      .padStart(3, "0")}`,
    ...body,
  };
  data.push(newUser);
  return response.status(201).send(newUser);
});

router.patch("/product-categories/:id", (request, response) => {
  const {
    body,
    params: { id },
  } = request;
  const parseId = parseInt(id);
  if (isNaN(parseId)) {
    return response.sendStatus(400);
  }
  const findUserIndex = data.findIndex((d) => {
    return d.productCategoryId === parseId;
  });
  if (findUserIndex === -1) {
    return response.sendStatus(404);
  }
  data[findUserIndex] = { ...data[findUserIndex], ...body };
  return response.sendStatus(200);
});

router.delete("/product-categories/:id", (request, response) => {
  const {
    params: { id },
  } = request;
  const parseId = parseInt(id);
  if (isNaN(parseId)) {
    return response.sendStatus(400);
  }
  const findUserIndex = data.findIndex((d) => {
    return d.productCategoryId === parseId;
  });
  if (findUserIndex === -1) {
    return response.sendStatus(404);
  }
  data.splice(findUserIndex, 1);
  return response.sendStatus(200);
});

export default router;
