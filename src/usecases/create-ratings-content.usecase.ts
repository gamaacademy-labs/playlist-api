import { RatingsContentDTO } from './../domain/dto/ratings-content.dto';
import { RatingsContentRepository } from './../infrastructure/database/repositories/ratings.contents.repository';

export class CreateRatingsContentUsecase {
  constructor(
    private readonly ratingsContentRepository: RatingsContentRepository,
  ) {}

  async execute(data: RatingsContentDTO) {
    return this.ratingsContentRepository.create(data);
  }
}
