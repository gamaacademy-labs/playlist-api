import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RatingsPlaylistDTO } from 'src/domain/dto/ratings-playlist.dto';
import { CreateRatingsPlaylistUsecase } from 'src/usecases/create-ratings-playlist.usecase';

import { RatingsContentDTO } from './../../../domain/dto/ratings-content.dto';
import { CreateRatingsContentUsecase } from './../../../usecases/create-ratings-content.usecase';
import { RatingsPlaylistRepository } from './../../database/repositories/ratings-playlist.repository';
import { RatingsContentRepository } from './../../database/repositories/ratings.contents.repository';

@ApiTags('ratings')
@Controller('ratings')
export class RatingsController {
  private readonly createRatingsContentUsecase: CreateRatingsContentUsecase;

  private readonly createRatingsPlaylistUsecase: CreateRatingsPlaylistUsecase;

  constructor(
    private readonly ratingsContentRepository: RatingsContentRepository,
    private readonly ratingsPlaylistRepository: RatingsPlaylistRepository,
  ) {
    (this.createRatingsContentUsecase = new CreateRatingsContentUsecase(
      this.ratingsContentRepository,
    )),
      (this.createRatingsPlaylistUsecase = new CreateRatingsPlaylistUsecase(
        this.ratingsPlaylistRepository,
      ));
  }

  @Post('/contents')
  createContentRating(@Body() data: RatingsContentDTO) {
    return this.createRatingsContentUsecase.execute(data);
  }

  @Post('/playlists')
  createPlaylistRating(@Body() data: RatingsPlaylistDTO) {
    return this.createRatingsPlaylistUsecase.execute(data);
  }
}
