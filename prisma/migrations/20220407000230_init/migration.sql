/*
  Warnings:

  - The `product` column on the `Orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "product",
ADD COLUMN     "product" TEXT[];
