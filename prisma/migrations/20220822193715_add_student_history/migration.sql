/*
  Warnings:

  - You are about to drop the `Contents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContentsRatings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaylistContents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaylistsRatings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentsRatings" DROP CONSTRAINT "ContentsRatings_StudentId_fkey";

-- DropForeignKey
ALTER TABLE "ContentsRatings" DROP CONSTRAINT "ContentsRatings_contentsId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistContents" DROP CONSTRAINT "PlaylistContents_contentId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistContents" DROP CONSTRAINT "PlaylistContents_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistsRatings" DROP CONSTRAINT "PlaylistsRatings_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistsRatings" DROP CONSTRAINT "PlaylistsRatings_studentId_fkey";

-- DropTable
DROP TABLE "Contents";

-- DropTable
DROP TABLE "ContentsRatings";

-- DropTable
DROP TABLE "PlaylistContents";

-- DropTable
DROP TABLE "Playlists";

-- DropTable
DROP TABLE "PlaylistsRatings";

-- DropTable
DROP TABLE "Students";

-- CreateTable
CREATE TABLE "playlists" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "level" "PlaylistLevel" NOT NULL DEFAULT 'MEDIUM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlistsratings" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlistsratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlistcontents" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlistcontents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "linkVideo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contentsratings" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contentsratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studenthistory" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "isVideoFinished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studenthistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "playlists_title_key" ON "playlists"("title");

-- CreateIndex
CREATE UNIQUE INDEX "contents_title_key" ON "contents"("title");

-- AddForeignKey
ALTER TABLE "playlistsratings" ADD CONSTRAINT "playlistsratings_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlistsratings" ADD CONSTRAINT "playlistsratings_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlistcontents" ADD CONSTRAINT "playlistcontents_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlistcontents" ADD CONSTRAINT "playlistcontents_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentsratings" ADD CONSTRAINT "contentsratings_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentsratings" ADD CONSTRAINT "contentsratings_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studenthistory" ADD CONSTRAINT "studenthistory_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studenthistory" ADD CONSTRAINT "studenthistory_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
