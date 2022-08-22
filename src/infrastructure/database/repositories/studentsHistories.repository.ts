import { Injectable } from '@nestjs/common';
import { StudentsHistoriesDTO } from 'src/domain/dto/studentsHistories.dto';

import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class StudentsHistoriesRepository {
  constructor(private prisma: PrismaProvider) {}

  async create(data: StudentsHistoriesDTO) {
    const studentsHistories = await this.prisma.studentsHistories.createMany({
      data,
    });
    return studentsHistories;
  }
}
