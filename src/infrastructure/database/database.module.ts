import { Global, Module } from '@nestjs/common';

import { PrismaProvider } from './providers/prisma.provider';
import { PlaylistsRepository } from './repositories/playlists.repository';
import { RatingsPlaylistRepository } from './repositories/ratings-playlist.repository';
import { RatingsContentRepository } from './repositories/ratings.contents.repository';
import { StudentsHistoriesRepository } from './repositories/studentsHistories.repository';

// Esse decorator esta sendo usado para que tudo que ta
// aqui dentro possa ser usado em qualquer lugar
@Global()
@Module({
  providers: [
    PrismaProvider,
    PlaylistsRepository,
    StudentsHistoriesRepository,
    RatingsContentRepository,
    RatingsPlaylistRepository,
  ],
  exports: [
    PrismaProvider,
    PlaylistsRepository,
    StudentsHistoriesRepository,
    RatingsContentRepository,
    RatingsPlaylistRepository,
  ],
})
export class DatabaseModule {}
