import { Module } from '@nestjs/common';

import { PlaylistsController } from './controllers/playlists.controller';
import { RatingsController } from './controllers/ratings.controller';
import { StudentHistoriesController } from './controllers/student-histories.controller';

@Module({
  controllers: [
    PlaylistsController,
    StudentHistoriesController,
    RatingsController,
  ],
})
export class HttpModule {}
