/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PlaylistLevel" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Playlists" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "level" "PlaylistLevel" NOT NULL DEFAULT 'MEDIUM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Playlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistsRatings" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlaylistsRatings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistContents" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlaylistContents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "linkVideo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentsRating" (
    "id" TEXT NOT NULL,
    "contentsId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentsRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Playlists_title_key" ON "Playlists"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Contents_title_key" ON "Contents"("title");

-- AddForeignKey
ALTER TABLE "PlaylistsRatings" ADD CONSTRAINT "PlaylistsRatings_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistContents" ADD CONSTRAINT "PlaylistContents_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistContents" ADD CONSTRAINT "PlaylistContents_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentsRating" ADD CONSTRAINT "ContentsRating_contentsId_fkey" FOREIGN KEY ("contentsId") REFERENCES "Contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
