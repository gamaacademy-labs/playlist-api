import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FindOneContentUsecase } from '../../../usecases/find-one-content.usecase';
import { ContentsRepository } from './../../database/repositories/contents.repository';

@ApiTags('contents')
@Controller('contents')
export class ContentsController {
  private readonly findOneContentUsecase: FindOneContentUsecase;

  constructor(private readonly contentsRepository: ContentsRepository) {
    this.findOneContentUsecase = new FindOneContentUsecase(
      this.contentsRepository,
    );
  }
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findOneContentUsecase.execute(id);
  }
}
