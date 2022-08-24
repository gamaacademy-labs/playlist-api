import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { HttpModule } from './infrastructure/http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
