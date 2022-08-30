import { RatingsContentsDTO } from 'src/domain/dto/ratings-contents.dto';

import { RatingsContentsRepository } from './../infrastructure/database/repositories/ratings.contents.repository';

export class CreateRatingsContentUsecase {
  constructor(
    private readonly ratingsContentRepository: RatingsContentsRepository,
  ) {}

  async execute(data: RatingsContentsDTO) {
    return this.ratingsContentRepository.create(data);
  }
}
