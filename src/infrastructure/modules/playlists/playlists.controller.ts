
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PlaylistsDTO } from './playlists.dto';
import { PlaylistsService } from './playlists.service';


@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  async create(@Body() data: PlaylistsDTO) {
    return this.playlistsService.create(data);
  }

  @Get()
  async findAll() {
    return this.playlistsService.findAll();
  }

  @Put(":id")
  async update(@Param('id') id: string, @Body() data: PlaylistsDTO) {
    return this.playlistsService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param('id') id: string) {
    return this.playlistsService.delete(id);
  }

}
