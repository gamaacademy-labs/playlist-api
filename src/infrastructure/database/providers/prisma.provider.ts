import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
  INestApplication,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaProvider
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaProvider.name);

  onModuleInit() {
    this.logger.log('Connecting to Prisma database...');
    return this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  onModuleDestroy() {
    return this.$disconnect();
  }
}

const p = new PrismaProvider();

p.playlists.findMany({
  select: {
    PlaylistContents: {
      select: {
        playlistId: true,
      },
    },
  },
});

p.playlists.findMany({
  select: {
    PlaylistsRatings: {
      select: {
        playlistId: true,
      },
    },
  },
});
