import { BadRequestException } from '@nestjs/common';

import { RatingsContentDTO } from './../domain/dto/ratings-content.dto';
import { RatingsContentRepository } from './../infrastructure/database/repositories/ratings.contents.repository';

export class CreateRatingsContentUsecase {
  constructor(
    private readonly ratingsContentRepository: RatingsContentRepository,
  ) {}

  async execute(data: RatingsContentDTO) {
    if (data.rating === null || data.rating >= 6) {
      throw new BadRequestException('Invalid value rating');
    }
    return this.ratingsContentRepository.create(data);
  }
}
