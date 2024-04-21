import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categoriesList = asyncHandler(async (req, res) => {
  return res.json({
    data: await prisma.category.findMany(),
  });
});

const categoryStore = asyncHandler(async (req, res) => {
  await prisma.category.create({
    data: {
      category_code: crypto.randomUUID(),
      category_name: req.body.category_name,
    },
  });

  return res.json({
    message: "Successfully Created",
  });
});

const categoryShow = asyncHandler(async (req, res) => {
  let category = await prisma.category.findFirst({
    where: {
      id: +req.params.id,
    },
  });

  if (category == null) {
    return res.json({
      message: "Category Not Found",
    });
  }

  return res.json({
    data: category,
  });
});

const categoryUpdate = asyncHandler(async (req, res) => {
  let category = await prisma.category.findFirst({
    where: {
      id: +req.params.id,
    },
  });

  if (category == null) {
    return res.json({
      message: "Category Not Found",
    });
  }

  await prisma.category.update({
    where: {
      id: +req.params.id,
    },
    data: {
      category_name: req.body.category_name,
    },
  });

  return res.json({
    message: "Updated Successfully",
  });
});

const categoryDelete = asyncHandler(async (req, res) => {
  await prisma.category.delete({
    where: {
      id: +req.params.id,
    },
  });
  return res.json({
    message: "Successfully Deleted",
  });
});

export {
  categoriesList,
  categoryStore,
  categoryShow,
  categoryUpdate,
  categoryDelete,
};
