import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/infrastructure/database/providers/prisma.provider';

import { RatingsContentDTO } from './../../../domain/dto/ratings-content.dto';

@Injectable()
export class RatingsContentRepository {
  constructor(private prisma: PrismaProvider) {}

  async create(data: RatingsContentDTO) {
    const ratingsContent = await this.prisma.contentsRatings.createMany({
      data,
    });
    return ratingsContent;
  }
}
