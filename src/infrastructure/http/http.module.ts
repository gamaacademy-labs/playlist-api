import { Module } from '@nestjs/common';
import { PlaylistsController } from './controllers/playlists.controller';
import { StudentHistoriesController } from './controllers/student-histories.controller';

@Module({
  controllers: [PlaylistsController, StudentHistoriesController],
})
export class HttpModule {}
