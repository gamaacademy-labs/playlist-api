/*
  Warnings:

  - You are about to drop the `studenthistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "studenthistory" DROP CONSTRAINT "studenthistory_contentId_fkey";

-- DropForeignKey
ALTER TABLE "studenthistory" DROP CONSTRAINT "studenthistory_studentId_fkey";

-- DropTable
DROP TABLE "studenthistory";

-- CreateTable
CREATE TABLE "studentshistories" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "isVideoFinished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentshistories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "studentshistories" ADD CONSTRAINT "studentshistories_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentshistories" ADD CONSTRAINT "studentshistories_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
