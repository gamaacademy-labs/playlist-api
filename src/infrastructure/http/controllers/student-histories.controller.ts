import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateStudentsHistoryUsecase } from '../../../usecases/create-student-history.usecase';
import { StudentsHistoriesRepository } from '../../../infrastructure/database/repositories/studentsHistories.repository';
import { StudentsHistoriesDTO } from '../../../domain/dto/studentsHistories.dto';
import { ApiTags } from '@nestjs/swagger';

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

  // TODO: create history update to update the isVideoFinalized to true
  // @Patch('/:id')
  // update(@Param('id') id: string) {
  //   return this.updateStudentHistoryIsVideoFinalizedUseCase.execute(id);
  // }
}
