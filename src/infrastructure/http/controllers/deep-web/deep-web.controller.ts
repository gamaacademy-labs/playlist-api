import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateDeepwebDto } from 'src/domain/dtos/create-deepweb.dto';
import { DeepwebProvider } from 'src/infrastructure/providers/development-deep-web.provider';
import { PikachuDeepwebProvider } from 'src/infrastructure/providers/pikachu-deep-web.provider';
import { createDeepWebSiteUseCase } from 'src/usecases/create-deepweb.usecase';

@ApiTags('deep-web')
@Controller('deep-web')
export class DeepWebController {
  private createDeepwebSiteUsecase: createDeepWebSiteUseCase;

  constructor() {
    this.createDeepwebSiteUsecase = new createDeepWebSiteUseCase(
      new PikachuDeepwebProvider(),
    );
  }

  @Post('/')
  createDeepWebSite(@Body() data: CreateDeepwebDto) {
    return this.createDeepwebSiteUsecase.execute(data);
  }
}
