import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentPlaylistDTO } from 'src/domain/dto/studentPlaylistsFavorites.dto';
import { CreateStudentsPlaylistsFavoritesUsecase } from 'src/usecases/create-student-playlists-favorites.usecase';
import { StudentsPlaylistsFavoritesRepository } from './../../database/repositories/studentPlaylistsFavorites.repository';

@ApiTags('student-playlist-favorite')
@Controller('student-playlist-favorite')
export class StudentPlaylistsFavoritesController {
  private readonly createStudentPlaylistsFavoritesUsecase: CreateStudentsPlaylistsFavoritesUsecase;

  constructor(
    private readonly studentsPlaylistsFavoritesRepository: StudentsPlaylistsFavoritesRepository,
  ) {
    this.createStudentPlaylistsFavoritesUsecase =
      new CreateStudentsPlaylistsFavoritesUsecase(
        this.studentsPlaylistsFavoritesRepository,
      );
  }

  @Post()
  create(@Body() data: CreateStudentPlaylistDTO) {
    return this.createStudentPlaylistsFavoritesUsecase.execute(data);
  }
  @Get()
  async findAll() {
    return this.studentsPlaylistsFavoritesRepository.findAll();
  }
}
