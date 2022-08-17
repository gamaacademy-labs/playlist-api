import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ContentsDTO } from '../../../domain/dto/contents.dto';
import { ContentsService } from '../../modules/contents/contents.service';

@Controller('contents')
export class ContentsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly contentsService: ContentsService) {}

  @Get()
  async findAll() {
    return this.contentsService.findAll();
  }
}
