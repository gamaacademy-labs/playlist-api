import { Controller, Get, Param } from '@nestjs/common';
import { PlaylistsRepository } from 'src/infrastructure/database/repositories/playlists.repository';
import { FindOnePlaylistUsecase } from 'src/usecases/find-one-playlist.usecase';

@Controller('playlists')
export class PlaylistsController {
  private readonly findOnePlaylistUsecase: FindOnePlaylistUsecase;

  constructor(private readonly playlistsRepository: PlaylistsRepository) {
    this.findOnePlaylistUsecase = new FindOnePlaylistUsecase(
      this.playlistsRepository,
    );
  }

  @Get('/:title')
  async findOne(@Param('title') title: string) {
    return this.findOnePlaylistUsecase.execute(title);
  }
}
