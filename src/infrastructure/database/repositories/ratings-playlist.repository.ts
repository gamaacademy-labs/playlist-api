import { Injectable } from '@nestjs/common';
import { RatingsPlaylistDTO } from 'src/domain/dto/ratings-playlist.dto';
import { PrismaProvider } from 'src/infrastructure/database/providers/prisma.provider';

@Injectable()
export class RatingsPlaylistRepository {
  constructor(private prisma: PrismaProvider) {}

  async create(data: RatingsPlaylistDTO) {
    const ratingsPlaylist = await this.prisma.playlistsRatings.createMany({
      data,
    });
    return ratingsPlaylist;
  }
}
