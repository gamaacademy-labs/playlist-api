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
  // eslint-disable-next-line prettier/prettier
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
    contents: {
      select: {
         content: true,
      }
    },
  },
});

p.playlists.findMany({
  select: {
    ratings: {
       select: {
         rating: true,
      }
    },
  },
});

p.contents.findMany({
  select: {
    ratingVideos: {
       select: {
         rating: true,
      }
    },
  },
});

p.contents.findMany({
  select: {
     playlists: {
       select: {
         playlist: true,
      }
    }
  },
});

