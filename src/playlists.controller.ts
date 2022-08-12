import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';

@Controller()
export class PlaylistsController {
  private readonly prisma: PrismaClient = new PrismaClient();
  constructor() {}

  @ApiTags('status')
  @Get("/playlists")
  getPlaylists() {
    return this.prisma.playlists.findMany();
  }
}
