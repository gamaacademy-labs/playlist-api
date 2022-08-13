
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ContentsDTO } from './contents.dto';
import { ContentsService } from './contents.service';


@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  async create(@Body() data: ContentsDTO) {
    return this.contentsService.create(data);
  }

  @Get()
  async findAll() {
    return this.contentsService.findAll();
  }

  @Put(":id")
  async update(@Param('id') id: string, @Body() data: ContentsDTO) {
    return this.contentsService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param('id') id: string) {
    return this.contentsService.delete(id);
  }

}