import { Global, Module } from '@nestjs/common';

import { PrismaProvider } from './providers/prisma.provider';
import { PlaylistsRepository } from './repositories/playlists.repository';
import { StudentsHistoriesRepository } from './repositories/studentsHistories.repository';

// Esse decorator esta sendo usado para que tudo que ta
// aqui dentro possa ser usado em qualquer lugar
@Global()
@Module({
  providers: [PrismaProvider, PlaylistsRepository, StudentsHistoriesRepository],
  exports: [PrismaProvider, PlaylistsRepository, StudentsHistoriesRepository],
})
export class DatabaseModule {}
