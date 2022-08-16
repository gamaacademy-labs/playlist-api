import { Module } from '@nestjs/common';
import { ContentsController } from './contents/contents.controller';
import { DeepWebController } from './deep-web/deep-web.controller';

@Module({
  controllers: [DeepWebController, ContentsController],
})
export class ControllersModule {}
