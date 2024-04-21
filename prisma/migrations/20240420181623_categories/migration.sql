-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category_code" TEXT NOT NULL,
    "category_name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_code_key" ON "Category"("category_code");
