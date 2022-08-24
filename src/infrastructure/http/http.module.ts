import { Module } from '@nestjs/common';
import { ContentsController } from './controllers/contents.controller';
import { PlaylistsController } from './controllers/playlists.controller';

@Module({
  controllers: [ContentsController, PlaylistsController],
})
export class HttpModule {}
