import { Injectable } from '@nestjs/common';
import { CreateStudentPlaylistDTO } from 'src/domain/dto/studentPlaylistsFavorites.dto';

import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class StudentsPlaylistsFavoritesRepository {
  constructor(private prisma: PrismaProvider) {}

  async create(data: CreateStudentPlaylistDTO) {
    const studentPlaylistsFavorites =
      await this.prisma.studentPlaylistsFavorites.createMany({
        data,
      });
    return studentPlaylistsFavorites;
  }

  async findAll() {
    return this.prisma.studentPlaylistsFavorites.findMany();
  }
}
