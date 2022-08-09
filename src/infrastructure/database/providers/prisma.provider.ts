import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaProvider extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaProvider.name);

  onModuleInit() {
    this.logger.log("Connecting to Prisma database...");
    return this.$connect();
  }

  onModuleDestroy() {
    return this.$disconnect();
  }
}
