import { StudentsPlaylistsFavoritesDTO } from 'src/domain/dto/studentPlaylistsFavorites.dto';
import { StudentsPlaylistsFavoritesRepository } from 'src/infrastructure/database/repositories/studentPlaylistsFavorites.repository';

export class CreateStudentsPlaylistsFavoritesUsecase {
  constructor(
    private readonly studentsPlaylistsFavoritesRepository: StudentsPlaylistsFavoritesRepository,
  ) {}

  async create(data: StudentsPlaylistsFavoritesDTO) {
    const studentPlaylistsFavorites =
      await this.studentsPlaylistsFavoritesRepository.create(data);
    return studentPlaylistsFavorites;
  }
}
