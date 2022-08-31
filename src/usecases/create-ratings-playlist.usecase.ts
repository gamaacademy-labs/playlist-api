import { BadRequestException } from '@nestjs/common';
import { RatingsPlaylistDTO } from 'src/domain/dto/ratings-playlist.dto';

import { RatingsPlaylistRepository } from './../infrastructure/database/repositories/ratings-playlist.repository';

export class CreateRatingsPlaylistUsecase {
  constructor(
    private readonly ratingsPlaylistRepository: RatingsPlaylistRepository,
  ) {}

  async execute(data: RatingsPlaylistDTO) {
    if (data.rating === null || data.rating >= 6) {
      throw new BadRequestException('Invalid value rating');
    }
    return this.ratingsPlaylistRepository.create(data);
  }
}
