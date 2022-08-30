import { Injectable } from '@nestjs/common';
import { RatingsContentsDTO } from 'src/domain/dto/ratings-contents.dto';
import { PrismaProvider } from 'src/infrastructure/database/providers/prisma.provider';

@Injectable()
export class RatingsContentsRepository {
  constructor(private prisma: PrismaProvider) {}

  async create(data: RatingsContentsDTO) {
    const ratingsContents = await this.prisma.contentsRating.createMany({
      data,
    });
    return ratingsContents;
  }
}
