import { Injectable } from '@nestjs/common';

import { StudentsHistoriesDTO } from '../../../domain/dto/studentsHistories.dto';
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

  async update(data: Partial<StudentsHistoriesDTO>) {
    return this.prisma.studentsHistories.update({
      where: {
        id: data.id,
      },
      data,
    });
  }
}
