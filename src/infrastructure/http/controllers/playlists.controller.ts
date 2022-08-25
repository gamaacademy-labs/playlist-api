import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlaylistsRepository } from 'src/infrastructure/database/repositories/playlists.repository';
import { FindOnePlaylistUsecase } from 'src/usecases/find-one-playlist.usecase';

@ApiTags('playlists')
@Controller('playlists')
export class PlaylistsController {
  private readonly findOnePlaylistUsecase: FindOnePlaylistUsecase;

  constructor(private readonly playlistsRepository: PlaylistsRepository) {
    this.findOnePlaylistUsecase = new FindOnePlaylistUsecase(
      this.playlistsRepository,
    );
  }

  @Get('/')
  async findAll() {
    return this.playlistsRepository.findAll();
  }

  @Get('/:title')
  async findOne(@Param('title') title: string) {
    return this.findOnePlaylistUsecase.execute(title);
  }
}
