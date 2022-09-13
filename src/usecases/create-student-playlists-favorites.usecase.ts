// import { NotFoundException } from '@nestjs/common';
import { CreateStudentPlaylistDTO } from 'src/domain/dto/studentPlaylistsFavorites.dto';
import { StudentsPlaylistsFavoritesRepository } from 'src/infrastructure/database/repositories/studentPlaylistsFavorites.repository';

export class CreateStudentsPlaylistsFavoritesUsecase {
  constructor(
    private readonly studentsPlaylistsFavoritesRepository: StudentsPlaylistsFavoritesRepository,
  ) {}

  async execute(data: CreateStudentPlaylistDTO) {
    // const playlist = await this.studentsPlaylistsFavoritesRepository.findOne(
    //   data.playlistId,
    // );

    // if (!playlist) throw new NotFoundException('Playlist not found');

    const studentPlaylistsFavorites =
      await this.studentsPlaylistsFavoritesRepository.create(data);
    return studentPlaylistsFavorites;
  }
}
