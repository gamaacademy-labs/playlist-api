import { Controller, Get, Param } from '@nestjs/common';
import { FindOneRepositoryUsecase } from './../../../usecases/find-one-repository.usecase';
import { ContentsRepository } from './../../database/repositories/contents.repository';

@Controller('contents')
export class ContentsController {
  private readonly findOneRepositoryUsecase: FindOneRepositoryUsecase;

  constructor(private readonly contentsRepository: ContentsRepository) {
    this.findOneRepositoryUsecase = new FindOneRepositoryUsecase(
      this.contentsRepository,
    );
  }
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.findOneRepositoryUsecase.execute(id);
  }
}
