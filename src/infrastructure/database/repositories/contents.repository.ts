import { PrismaProvider } from '../providers/prisma.provider';

export class ContentsRepository {
  constructor(private readonly prismaProvider: PrismaProvider) {}

  public async create(data: any) {
    return this.prismaProvider.contents.create({
      data: {
        ...data,
      },
    });
  }
}
