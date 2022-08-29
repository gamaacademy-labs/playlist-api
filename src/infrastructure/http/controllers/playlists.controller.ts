import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PlaylistsRepository } from '../../../infrastructure/database/repositories/playlists.repository';
import { FindOnePlaylistUsecase } from '../../../usecases/find-one-playlist.usecase';

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

  @ApiOperation({
    summary: 'This is returning playlist with all relations',
  })
  @Get('/:title')
  async findOne(@Param('title') title: string) {
    return this.findOnePlaylistUsecase.execute(title);
  }
}
