import { Module } from '@nestjs/common';

import { PlaylistsController } from './controllers/playlists.controller';
import { RatingsController } from './controllers/ratings.controller';
import { StudentHistoriesController } from './controllers/student-histories.controller';
import { StudentPlaylistsFavoritesController } from './controllers/student-playlist-favorite.controller';

@Module({
  controllers: [
    PlaylistsController,
    StudentHistoriesController,
    StudentPlaylistsFavoritesController,
    RatingsController,
  ],
})
export class HttpModule {}
