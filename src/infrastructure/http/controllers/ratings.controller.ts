import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RatingsContentsDTO } from 'src/domain/dto/ratings-contents.dto';

import { CreateRatingsContentUsecase } from './../../../usecases/create-ratings-content.usecase';
import { RatingsContentsRepository } from './../../database/repositories/ratings.contents.repository';

@ApiTags('ratings')
@Controller('ratings')
export class RatingsController {
  private readonly createRatingsContentUsecase: CreateRatingsContentUsecase;

  constructor(
    private readonly ratingsContentsRepository: RatingsContentsRepository,
  ) {
    this.createRatingsContentUsecase = new CreateRatingsContentUsecase(
      this.ratingsContentsRepository,
    );
  }

  @Post('/contents')
  create(@Body() data: RatingsContentsDTO) {
    return this.createRatingsContentUsecase.execute(data);
  }
}
