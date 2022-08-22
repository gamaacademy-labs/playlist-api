import { PrismaProvider } from '../providers/prisma.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentsRepository {
  constructor(private prisma: PrismaProvider) {}

  async findOne(id: string) {
    return this.prisma.contents.findFirst({
      where: {
        id,
      },
      select: {
        ratingVideos: true,
      },
    });
  }
}
