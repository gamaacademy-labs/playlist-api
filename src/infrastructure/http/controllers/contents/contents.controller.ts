import { Controller, Get } from '@nestjs/common';

@Controller('contents')
export class ContentsController {
  @Get('/')
  getHello(): string {
    return 'Hello World!';
  }
}
