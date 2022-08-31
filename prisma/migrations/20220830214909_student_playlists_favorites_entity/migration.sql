-- CreateTable
CREATE TABLE `students_playlists_favorites` (
    `id` VARCHAR(191) NOT NULL,
    `playlistId` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
