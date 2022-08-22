import { ContentsRepository } from 'src/infrastructure/database/repositories/contents.repository';

export class FindOneRepositoryUsecase {
  constructor(private readonly contentsRepository: ContentsRepository) {}

  async execute(id: string) {
    return this.contentsRepository.findOne(id);
  }
}
