import { Injectable } from '@nestjs/common';

import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class ContentsRepository {
  constructor(private prisma: PrismaProvider) {}

  async findOne(id: string) {
    return this.prisma.contents.findFirst({
      where: {
        id,
      },
      select: {
        rating: true,
      },
    });
  }
}
