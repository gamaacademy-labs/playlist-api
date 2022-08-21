/*
  Warnings:

  - Added the required column `studentId` to the `PlaylistsRatings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlaylistsRatings" ADD COLUMN     "studentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PlaylistsRatings" ADD CONSTRAINT "PlaylistsRatings_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
