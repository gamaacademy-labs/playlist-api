import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StudentsHistoriesDTO } from '../../../domain/dto/studentsHistories.dto';
import { StudentsHistoriesRepository } from '../../../infrastructure/database/repositories/studentsHistories.repository';
import { CreateStudentsHistoryUsecase } from '../../../usecases/create-student-history.usecase';

@ApiTags('students-histories')
@Controller('student-histories')
export class StudentHistoriesController {
  private readonly createStudentHistoryUsecase: CreateStudentsHistoryUsecase;

  constructor(
    private readonly studentsHistoriesRepository: StudentsHistoriesRepository,
  ) {
    this.createStudentHistoryUsecase = new CreateStudentsHistoryUsecase(
      this.studentsHistoriesRepository,
    );
  }

  @Post()
  create(@Body() data: StudentsHistoriesDTO) {
    return this.createStudentHistoryUsecase.execute(data);
  }

  @Patch('/:id')
  update(@Param('id') id: string) {
    return this.studentsHistoriesRepository.update({
      id,
      isVideoFinished: true,
    });
  }
}
