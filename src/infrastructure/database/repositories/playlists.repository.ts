import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/infrastructure/database/providers/prisma.provider';

@Injectable()
export class PlaylistsRepository {
  constructor(private prisma: PrismaProvider) {}

  async findOne(title: string) {
    return this.prisma.playlists.findFirst({
      where: {
        title,
      },
      select: {
        contents: {
          select: {
            content: true,
          },
          include: {
            content: {
              select: {
                studentHistory: true,
              },
            },
          },
        },
        ratings: true,
      },
    });
  }

  async findAll() {
    return this.prisma.playlists.findMany();
  }
}
