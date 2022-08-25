import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentsHistorieUsecase } from '../../../usecases/create-studentHistory.usecase';
import { StudentsHistoriesRepository } from 'src/infrastructure/database/repositories/studentsHistories.repository';
import { StudentsHistoriesDTO } from 'src/domain/dto/studentsHistories.dto';

@Controller('student-histories')
export class StudentHistoriesController {
  private readonly createStudentHistoryUsecase: CreateStudentsHistorieUsecase;

  constructor(
    private readonly studentsHistoriesRepository: StudentsHistoriesRepository,
  ) {
    this.createStudentHistoryUsecase = new CreateStudentsHistorieUsecase(
      this.studentsHistoriesRepository,
    );
  }
  @Post()
  create(@Body() data: StudentsHistoriesDTO) {
    return this.createStudentHistoryUsecase.execute(data);
  }
}
