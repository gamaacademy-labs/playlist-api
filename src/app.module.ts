import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { PlaylistsController } from './playlists.controller';

@Module({
  imports: [DatabaseModule],
controllers: [AppController, PlaylistsController],
  providers: [AppService],
})
export class AppModule {}
