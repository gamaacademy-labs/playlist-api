import { RatingsPlaylistDTO } from 'src/domain/dto/ratings-playlist.dto';

import { RatingsPlaylistRepository } from './../infrastructure/database/repositories/ratings-playlist.repository';

export class CreateRatingsPlaylistUsecase {
  constructor(
    private readonly ratingsPlaylistRepository: RatingsPlaylistRepository,
  ) {}

  async execute(data: RatingsPlaylistDTO) {
    return this.ratingsPlaylistRepository.create(data);
  }
}
