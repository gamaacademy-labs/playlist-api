import { Controller, Get, Param } from '@nestjs/common';

import { FindOneContentsUsecase } from '../../../usecases/find-one-content.usecase';
import { ContentsRepository } from './../../database/repositories/contents.repository';

@Controller('contents')
export class ContentsController {
  private readonly findOneRepositoryUsecase: FindOneContentsUsecase;

  constructor(private readonly contentsRepository: ContentsRepository) {
    this.findOneRepositoryUsecase = new FindOneContentsUsecase(
      this.contentsRepository,
    );
  }
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findOneRepositoryUsecase.execute(id);
  }
}
