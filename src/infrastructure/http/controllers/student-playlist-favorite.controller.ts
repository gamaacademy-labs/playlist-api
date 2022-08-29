import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudentsPlaylistsFavoritesDTO } from 'src/domain/dto/studentPlaylistsFavorites.dto';
import { CreateStudentsPlaylistsFavoritesUsecase } from 'src/usecases/create-student-playlists-favorites.usecase';
import { StudentsPlaylistsFavoritesRepository } from './../../database/repositories/studentPlaylistsFavorites.repository';

@ApiTags('student-playlist-favorite')
@Controller('student-playlist-favorite')
export class StudentPlaylistFavoritesController {
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
  create(@Body() data: StudentsPlaylistsFavoritesDTO) {
    return this.createStudentPlaylistsFavoritesUsecase.execute(data);
  }
}
