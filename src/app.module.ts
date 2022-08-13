import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { PlaylistsModule } from './infrastructure/modules/playlists/playlists.module';
import { ContentsModule } from './infrastructure/modules/contents/contents.module';


@Module({
  imports: [DatabaseModule, PlaylistsModule, ContentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
