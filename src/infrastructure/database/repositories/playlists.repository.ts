import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../../../infrastructure/database/providers/prisma.provider';

@Injectable()
export class PlaylistsRepository {
  constructor(private prisma: PrismaProvider) {}

  async findOne(title: string, studentId = 'cl80j7h910035092m4y1upc6s') {
    return this.prisma.playlists.findFirst({
      where: {
        title,
      },
      include: {
        contents: {
          include: {
            content: {
              include: {
                studentHistory: {
                  where: {
                    studentId,
                  },
                },
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
