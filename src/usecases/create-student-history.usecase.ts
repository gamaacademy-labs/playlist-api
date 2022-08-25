import { StudentsHistoriesDTO } from 'src/domain/dto/studentsHistories.dto';
import { StudentsHistoriesRepository } from 'src/infrastructure/database/repositories/studentsHistories.repository';

export class CreateStudentsHistoryUsecase {
  constructor(
    private readonly StudentsHistoriesRepository: StudentsHistoriesRepository,
  ) {}

  async execute(data: StudentsHistoriesDTO) {
    return this.StudentsHistoriesRepository.create(data);
  }
}
