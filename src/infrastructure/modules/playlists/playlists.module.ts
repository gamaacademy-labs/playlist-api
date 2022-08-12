import { PrismaProvider } from './../../database/providers/prisma.provider';
import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService, PrismaProvider]
})
export class PlaylistsModule {}
