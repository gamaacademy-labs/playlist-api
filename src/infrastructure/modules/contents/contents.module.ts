import { PrismaProvider } from './../../database/providers/prisma.provider';
import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from '../../http/controllers/contents.controller';

@Module({
  controllers: [ContentsController],
  providers: [ContentsService, PrismaProvider],
})
export class ContentsModule {}
