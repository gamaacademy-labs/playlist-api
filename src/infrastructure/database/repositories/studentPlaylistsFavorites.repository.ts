import { Injectable } from '@nestjs/common';
import { StudentsPlaylistsFavoritesDTO } from 'src/domain/dto/studentPlaylistsFavorites.dto';

import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class StudentsHistoriesRepository {
  constructor(private prisma: PrismaProvider) {}

  async create(data: StudentsPlaylistsFavoritesDTO) {
    const studentPlaylistsFavorites =
      await this.prisma.studentPlaylistsFavorites.createMany({
        data,
      });
    return studentPlaylistsFavorites;
  }
}
