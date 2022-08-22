/*
  Warnings:

  - You are about to drop the `ContentsRating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentsRating" DROP CONSTRAINT "ContentsRating_contentsId_fkey";

-- DropTable
DROP TABLE "ContentsRating";

-- CreateTable
CREATE TABLE "ContentsRatings" (
    "id" TEXT NOT NULL,
    "contentsId" TEXT NOT NULL,
    "StudentId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentsRatings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContentsRatings" ADD CONSTRAINT "ContentsRatings_contentsId_fkey" FOREIGN KEY ("contentsId") REFERENCES "Contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentsRatings" ADD CONSTRAINT "ContentsRatings_StudentId_fkey" FOREIGN KEY ("StudentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
